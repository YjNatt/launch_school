require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"

require_relative "lib/recipe.rb"

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

def load_recipes
  file_path = File.join(data_path, "recipes.yml")
  YAML.load_file(file_path) || {}
end

def next_element_id(hash)
  max = hash.keys.max || 0
  max + 1
end

def error_for_recipe_title(title)
  if title.empty?
    "Title cannot be empty"
  elsif title.match?(/[^a-z1-9 ]/i)
    "Title can only contain letters, digits, and spaces"
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
  error = error_for_recipe_title(title)

  if error
    session[:message] = error
    erb :new_recipe
  else
    recipes = load_recipes
    recipe = Recipe.new(title)
    id = next_element_id(recipes)
    recipes[id] = recipe

    file_path = File.join(data_path, "recipes.yml")
    File.open(file_path, "w") do |file|
      file.write(recipes)
    end

    session[:message] = "Recipe has been created"
    redirect("/")
  end
end
