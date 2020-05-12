require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"

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

def error_for_username(username, existing_users)
  if existing_users.key?(username)
    "Username already exists"
  elsif username.empty?
    "Username cannot be empty"
  end
end

def error_for_password(password)
  if password.empty?
    "Password cannot be empty"
  elsif /[^a-zA-Z0-9]/.match?(password)
    "Password must only contain letters and digits"
  end
end

def valid_credentials?(username, password)
  file_path = File.join(data_path, "users.yml")
  credentials = YAML.load_file(file_path)

  if credentials.key?(username)
    credentials[username] == password
  else
    false
  end
end

get "/" do
  erb :index
end

# display signin form
get "/signin" do
  erb :signin
end

# Sign user in account
post "/signin" do
  username = params[:username]
  password = params[:password]

  if valid_credentials?(username, password)
    session[:message] = "Welcome #{username}!"
    session[:username] = username
    redirect "/#{username}"
  else
    status 422
    session[:message] = "Invalid username or password"
    erb :signin
  end
end

# display signup form
get "/signup" do
  erb :signup
end

# sign up user
post "/signup" do
  file_path = File.join(data_path, "users.yml")
  credentials = YAML.load_file(file_path)

  username = params[:username]
  password = params[:password]

  error = error_for_username(username, credentials) ||
          error_for_password(password)

  if error 
    status 422
    session[:message] = error
    erb :signup
  else
    credentials[username] = password
    File.open(file_path, "w") do |file|
      file.write(credentials.to_yaml)
    end

    contacts_file_path = File.join(data_path, "users_contacts", "#{username}.yml")
    File.new(contacts_file_path, "w")

    session[:message] = "Account has been created."
    redirect "/"
  end
end

# display user page
get "/:username" do
  erb :contacts
end

# display add contact form
get "/:username/contact" do
  erb :new_contact
end
