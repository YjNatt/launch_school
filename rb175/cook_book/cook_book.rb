require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"

helpers do
  def ingredients_default_text
    "3 cups flour\n2 sticks unsalted butter\n1 tbsp baking powder\n..."
  end
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
