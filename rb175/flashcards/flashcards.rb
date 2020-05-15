require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"
require "bcrypt"

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
    credentials[username] == password
  else
    false
  end
end

get "/" do
  erb :index
end

post "/" do
  if valid_credentials?(params[:username], params[:password])
    redirect "/#{params[:username]}"
  else
    erb :index
  end
end
