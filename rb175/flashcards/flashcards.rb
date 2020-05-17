require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"
require "bcrypt"

require_relative "lib/deck.rb"

configure do
  enable :sessions
  set :session_secret, 'secret'
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def next_element_id(elements)
  max = elements.keys.max || 0
  max + 1
end

def load_all_decks(username)
  path = File.join(data_path, "#{username}.yml")
  YAML.load_file(path) || {}
end

def edit_decks(username)
  decks = yield load_all_decks(username)
  file_name = File.join(data_path, "#{username}.yml")
  File.open(file_name, "w") do |file|
    file.write(decks.to_yaml)
  end
end

def load_user_credentials
  credentials_path = if ENV["RACK_ENV"] == "test"
                       File.expand_path("../test/users.yml", __FILE__)
                     else
                       File.expand_path("../users.yml", __FILE__)
                     end

  YAML.load_file(credentials_path) || {}
end

def valid_credentials?(username, password)
  credentials = load_user_credentials
  if credentials.key?(username)
    bcrypt_password = BCrypt::Password.new(credentials[username])
    bcrypt_password == password
  else
    false
  end
end

def user_signed_in?
  session.key?(:username)
end

def required_signed_in_user
  return true if user_signed_in?

  session[:message] = "You must sign in first"
  redirect "/"
end

def error_for_deck_name(name)
  decks = load_all_decks(params[:username])
  if name.empty?
    "Deck name cannot be empty"
  elsif name.match?(/[^a-zA-Z0-9]/)
    "Deck name can only consist of alphabet characters and digits"
  elsif decks.values.map { |deck| deck.name.downcase }.any?(name.downcase)
    "Deck name already exists"
  end
end

# Display index page
get "/" do
  erb :index
end

# Signin user
post "/" do
  username = params[:username]
  password = params[:password]

  if valid_credentials?(username, password)
    session[:username] = username
    redirect "/#{username}/decks"
  else
    status 422
    session[:message] = "Invalid username or password"
    erb :index
  end
end

# Signout user
post "/signout" do
  session.delete(:username)
  session[:message] = "You have signed out"
  redirect "/"
end

# Display user flashcards
get "/:username/decks" do
  required_signed_in_user
  @decks = load_all_decks(params[:username])
  erb :decks
end

# render form to create deck
get "/:username/decks/new" do
  required_signed_in_user
  erb :new_decks
end

# create deck
post "/:username/decks" do
  required_signed_in_user
  username = params[:username]
  deck_name = params[:name].strip

  error = error_for_deck_name(deck_name)

  if error
    status 422
    session[:message] = error
    erb :new_decks
  else
    deck = Deck.new(deck_name)

    edit_decks(username) do |decks|
      id = next_element_id(decks)
      decks[id] = deck
      decks
    end

    session[:message] = "Deck created"
    redirect "/#{username}/decks"
  end
end

# delete deck
post "/:username/decks/:id/delete" do
  required_signed_in_user
  username = params[:username]

  edit_decks(username) do |decks|
    decks.delete(params[:id].to_i)
    decks
  end

  session[:message] = "Deck deleted"
  redirect "/#{username}/decks"
end

# render form to edit deck name
get "/:username/decks/:id/edit" do
  required_signed_in_user
  username = params[:username]
  id = params[:id].to_i
  decks = load_all_decks(username)
  @deck_name = decks.fetch(id).name
  erb :edit_deck
end

# edit deck name
post "/:username/decks/:id/edit" do
  required_signed_in_user
  username = params[:username]
  deck_name = params[:name].strip
  id = params[:id].to_i

  error = error_for_deck_name(deck_name)

  if error
    status 422
    session[:message] = error
    erb :edit_deck
  else
    edit_decks(username) do |decks|
      deck = decks.fetch(id)
      deck.name = deck_name
      decks
    end
    redirect "/#{username}/decks"
  end
end

# render deck page
get "/:username/decks/:id" do
  required_signed_in_user
  id = params[:id].to_i
  decks = load_all_decks(params[:username])
  @deck = decks.fetch(id)
  erb :deck
end

