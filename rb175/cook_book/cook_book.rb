require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"

helpers do
end

def parse_text_to_array(text)
  text.split("\n").map(&:strip).reject(&:empty?)
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

# homepage
get "/" do
  erb :index
end

# recipe form
get "/recipe/new" do
  erb :new_recipe
end

# create recipe
post "/recipe" do
  title = params[:title].strip
end
