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

def load_users_credentials
  credentials_path = if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/users.yml", __FILE__)
  else
    File.expand_path("../users.yml", __FILE__)
  end
  YAML.load_file(credentials_path)
end

def valid_credentials?(username, password)
  credentials = load_users_credentials
  if credentials.key?(username)
    bcrypt_password = BCrypt::Password.new(credentials[username])
    bcrypt_password == password
  else
    false
  end
end

# Display homepage
get "/" do
  erb :index
end

# Sign user in
post "/" do
  credentials = load_users_credentials
  if valid_credentials?(params[:username], params[:password])
    session[:message] = "Welcome!"
    redirect("/#{params[:username]}")
  else
    status 422
    session[:message] = "Invalid username or password"
    erb :index
  end
end
