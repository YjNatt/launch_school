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

  credentials = YAML.load_file(credentials_path) || {}

  if block_given?
    updated_credentials = yield credentials
    File.open(credentials_path, "w") do |file|
      file.write(updated_credentials.to_yaml)
    end
  else
    credentials
  end
end

def valid_credentials?(username, password)
  credentials = load_users_credentials
  credentials[username] == password
end

def error_for_username(username)
  credentials = load_users_credentials
  if credentials.key?(username)
    "Username is taken" 
  elsif username.empty?
    "Username cannot be empty"
  elsif username.match?(/[^a-zA-Z0-9]/)
    "Username can only consists of letters and digits"
  elsif username.length < 4
    "Username must be at least 4 characters long"
  end
end

def error_for_password(password1, password2)
  if password1.empty?
    "Password cannot be empty"
  elsif password1.match?(/[^a-zA-Z0-9]/)
    "Password can only consists of letters and digits"
  elsif password1.length < 6
    "Password must be at least 6 characters long"
  elsif password1 != password2
    "Passwords do not match"
  end
end

def create_file_for_user(username)
  path = File.join(data_path, "#{username}.yml")
  File.new(path, "w")
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

# Display signup form
get "/signup" do
  erb :signup
end

# Create user
post "/signup" do
  error = error_for_username(params[:username]) ||
          error_for_password(params[:password], params[:validatepassword])
  if error
    status 422
    session[:message] = error
    erb :signup
  else
    load_users_credentials do |credentials|
      bcrypt_password = BCrypt::Password.create(params[:password])
      credentials[params[:username]] = bcrypt_password
      credentials
    end

    create_file_for_user(params[:username])
    session[:message] = "Account has been created"
    redirect "/#{params[:username]}"
  end
end
