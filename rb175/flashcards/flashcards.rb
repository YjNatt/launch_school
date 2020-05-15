require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"
require "bcrypt"

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

def user_decks_path(username)
  File.join(data_path, "#{username}")
end

def load_all_decks(username)
  path = File.join(user_decks_path(username), "*.yml")
  Dir.glob(path).map { |file| File.basename(file, ".yml") }
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
  unless user_signed_in?
    session[:message] = "You must sign in first"
    redirect "/"
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

#Signout user
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
  deck_name = params[:name]

  error = error_for_deck_name

  if error
    status 422
    session[:message] = error
    erb :new_decks
  else
    path = user_decks_path(username)
    file_name = File.join(path, "#{deck_name}.yml")
    File.new(file_name, "w")

    session[:message] = "Deck created"
    redirect "/#{username}/decks"
  end
end
