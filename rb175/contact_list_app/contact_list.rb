require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"
require "bcrypt"

require_relative "lib/contact.rb"

configure do
  enable :sessions
  set :session_secret, 'secret'
end

helpers do
  def sort_contacts(contacts, &block)
    sorted_contacts = if session[:sortby] == "group"
      contacts.sort do |contact1, contact2|
        if contact1[1].group == contact2[1].group
          contact1[1].name <=> contact2[1].name
        else
          contact1[1].group <=> contact2[1].group
        end
      end.to_h
    else
      contacts.sort_by { |id, contact| contact.name }.to_h
    end
    sorted_contacts.each(&block)
  end
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

def load_contacts(username)
  contacts_path = File.join(data_path, "#{username}.yml")
  contacts = YAML.load_file(contacts_path) || {}

  if block_given?
    updated_contacts = yield contacts
    File.open(contacts_path, "w") do |file|
      file.write(updated_contacts.to_yaml)
    end
  else
    contacts
  end
end

def valid_credentials?(username, password)
  credentials = load_users_credentials
  credentials[username] == password
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

def error_for_creating_contact(fname, lname, phone, email, group)
  if fname.empty?
    "First name cannot be empty"
  elsif group.empty?
    "Group cannot be empty"
  elsif phone.match?(/[^0-9\- ()]/)
    "Phone number can only contain digits, spaces, -, and ()"
  end
end


def create_file_for_user(username)
  path = File.join(data_path, "#{username}.yml")
  File.new(path, "w")
end

def next_contact_id(contacts)
  max = contacts.keys.max || 0
  max += 1
end

# Display homepage
get "/" do
  erb :index
end

# Sign user in
post "/" do
  username = params[:username]
  credentials = load_users_credentials

  if valid_credentials?(username, params[:password])
    session[:username] = username
    session[:message] = "Welcome!"
    redirect("/#{username}")
  else
    status 422
    session[:message] = "Invalid username or password"
    erb :index
  end
end

# Signout user
post "/signout" do
  session.delete(:username)
  session.delete(:sortby)
  session[:message] = "You have signed out"
  redirect "/"
end

# Display signup form
get "/signup" do
  erb :signup
end

# Create user
post "/signup" do
  username = params[:username].strip
  error = error_for_username(username) ||
          error_for_password(params[:password], params[:validatepassword])
  if error
    status 422
    session[:message] = error
    erb :signup
  else
    load_users_credentials do |credentials|
      bcrypt_password = BCrypt::Password.create(params[:password])
      credentials[username] = bcrypt_password
      credentials
    end

    create_file_for_user(username)
    session[:username] = username
    session[:message] = "Account has been created"
    redirect "/#{username}"
  end
end

# Display user contacts
get "/:username" do
  required_signed_in_user
  @contacts = load_contacts(params[:username])
  erb :contacts
end

# Sort user contacts
post "/:username/sortby" do
  session[:sortby] = params[:sortby]
  redirect "/#{params[:username]}"
end

# Display contact form
get "/:username/contact" do
  erb :new_contact
end

def contact_form_details
  fname = params[:fname].strip
  lname = params[:lname].strip
  phone = params[:phone].strip
  email = params[:email].strip
  group = params[:group].strip
  [fname, lname, phone, email, group]
end

# Create contact
post "/:username" do
  required_signed_in_user
  error = error_for_creating_contact(*contact_form_details)

  if error
    status 422
    session[:message] = error
    erb :new_contact
  else
    contact = Contact.new(*contact_form_details)

    load_contacts(params[:username]) do |contacts|
      id = next_contact_id(contacts)
      contacts[id] = contact
      contacts
    end

    redirect "/#{params[:username]}"
  end
end

# Display contact edit form
get "/:username/:id/edit" do
  required_signed_in_user
  contacts = load_contacts(params[:username])
  @contact = contacts[params[:id].to_i]
  erb :edit_contact
end

def update_contact_info(contact)
  contact.fname = params[:fname].strip
  contact.lname = params[:lname].strip
  contact.phone = params[:phone].strip
  contact.email = params[:email].strip
  contact.group = params[:group].strip
end

# Update contact
post "/:username/:id" do
  required_signed_in_user
  error = error_for_creating_contact(*contact_form_details)

  if error
    status 422
    session[:message] = error
    erb :edit_contact
  else
    load_contacts(params[:username]) do |contacts|
      contact = contacts[params[:id].to_i]
      update_contact_info(contact)
      contacts
    end
    session[:message] = "Contact updated"
    redirect "/#{params[:username]}"
  end
end

# Delete contact
post "/:username/:id/delete" do
  required_signed_in_user
  load_contacts(params[:username]) do |contacts|
    contacts.delete(params[:id].to_i)
    contacts
  end

  session[:message] = "Contact deleted"
  redirect "/#{params[:username]}"
end
