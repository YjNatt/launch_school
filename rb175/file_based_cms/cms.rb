require "sinatra"
require "sinatra/reloader"
require "sinatra/content_for"
require "tilt/erubis"
require "redcarpet"
require "yaml"
require "bcrypt"

configure do
  enable :sessions
  set :session_secret, 'secret'
end

def render_markdown(file)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  markdown.render(file)
end

def load_file_content(path)
  content = File.read(path)
  case(File.extname(path))
  when ".txt"
    headers["Content-Type"] = "text/plain"
    content
  when ".md"
    erb render_markdown(content)
  end
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def load_user_credentials
  credentials_path = if ENV["RACK_ENV"] == "text"
    File.expand_path("../test/users.yml", __FILE__)
  else
    File.expand_path("../users.yml", __FILE__)
  end
  YAML.load_file(credentials_path)
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

# validates document name
def error_for_document_name(file_name)
  if file_name.size <= 0
    "A name is required"
  elsif File.extname(file_name).empty?
    "An extention is required"
  end
end

def user_signed_in?
  session.key?(:username)
end

def required_signed_in_user
  unless user_signed_in?
    session[:message] = "You must be signed in to do that."
    redirect "/"
  end
end

root = File.expand_path("..", __FILE__)

get "/" do
  pattern = File.join(data_path, "*")
  @files = Dir.glob(pattern).map do |path|
    File.basename(path)
  end
  erb :index
end

get "/new" do
  required_signed_in_user
  erb :new
end

get "/:filename" do
  file_path = File.join(data_path, params[:filename])

  if File.exist?(file_path)
    load_file_content(file_path)
  else
    session[:message] = "#{params[:filename]} does not exist."
    redirect "/"
  end
end

# Render page to edit file to edit
get "/:filename/edit" do
  required_signed_in_user
  @file_name = params[:filename]
  file_path = File.join(data_path, params[:filename])
  @content = File.read(file_path)

  erb :edit
end


# Creates a new document
post "/create" do
  required_signed_in_user
  file_name = params[:filename].strip
  error = error_for_document_name(file_name)
  if error
    status 422
    session[:message] = error
    erb :new
  else
    file_path = File.join(data_path, file_name)

    File.write(file_path, "")
    session[:message] = "#{file_name} was created."

    redirect "/"
  end
end

# Updated file
post "/:filename" do
  required_signed_in_user
  file_path = File.join(data_path, params[:filename])
  File.write(file_path, params[:content])  
  session[:message] = "#{params[:filename]} has been edited"
  redirect "/"
end

# Delete file
post "/:filename/delete" do
  required_signed_in_user
  file_path = File.join(data_path, params[:filename])
  File.delete(file_path)
  session[:message] = "#{ params[:filename] } has been deleted."
  redirect "/"
end

# Signin template
get "/users/signin" do
  erb :signin
end

# Signin user
post "/users/signin" do
  username = params[:username]
  password = params[:password]

  if valid_credentials?(username, password)
    session[:username] = username
    session[:message] = "Welcome!"
    redirect "/"
  else
    status 422
    session[:message] = "Invalid Credentials"
    erb :signin
  end
end

# Signout user
post "/users/signout" do
  session.delete(:username)
  session[:message] = "You have been signed out."
  redirect "/"
end
