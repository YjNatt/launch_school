require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"

require_relative "lib/recipe.rb"

# TODO
# change routes from to show steps and ingredients on seperate page

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

def recipes_path
  File.join(data_path, "recipes.yml")
end

def load_recipes
  file_path = File.join(data_path, "recipes.yml")
  YAML.load_file(file_path) || {}
end

def update_recipes(recipes)
  File.open(recipes_path, "w") do |file|
    file.write(recipes.to_yaml)
  end
end

def next_element_id(hash)
  max = hash.keys.max || 0
  max + 1
end

def error_for_recipe_title(title)
  recipes = load_recipes.values.map { |recipe| recipe.name.downcase }

  if title.empty?
    "Title cannot be empty"
  elsif title.match?(/[^a-z1-9 ]/i)
    "Title can only contain letters, digits and spaces"
  elsif recipes.any?(title.downcase)
    "Title is already taken"
  end
end

def error_for_ingredient(ingredient)
  if ingredient.empty?
    "Ingredient cannot be empty"
  elsif ingredient.match(/[^a-z1-9 \/ (),]/i)
    "Ingredient contains invalid characters"
  end
end

# homepage
get "/" do
  @recipes = load_recipes
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
    status 422
    session[:message] = error
    erb :new_recipe
  else
    recipes = load_recipes
    recipe = Recipe.new(title)
    id = next_element_id(recipes)
    recipes[id] = recipe
    update_recipes(recipes)

    session[:message] = "Recipe has been created"
    redirect("/")
  end
end

# delete recipe
post "/recipe/:id/delete" do
  recipes = load_recipes
  recipes.delete(params[:id].to_i)
  update_recipes(recipes)
  session[:message] = "Recipe has been deleted"
  redirect("/")
end

# display form to edit recipe
get "/recipe/:id/ingredient" do
  @recipe = load_recipes[params[:id].to_i]
  erb :edit_recipe
end

# add ingredient
post "/recipe/:id/ingredient" do
  ingredient = params[:ingredient].strip
  recipes = load_recipes
  recipe = recipes[params[:id].to_i]

  error = error_for_ingredient(ingredient)

  if error
    status 422
    @recipe = recipe
    session[:message] = error
    erb :edit_recipe
  else
    ingredient_id = next_element_id(recipe.ingredients)
    recipe.add_ingredient(ingredient_id, ingredient)
    update_recipes(recipes)
    redirect("/recipe/#{params[:id]}/ingredient")
  end
end

# delete ingredient
post "/recipe/:recipe_id/ingredient/:id/delete" do
  recipes = load_recipes
  recipe = recipes[params[:recipe_id].to_i]
  recipe.delete_ingredient(params[:id].to_i)
  update_recipes(recipes)
  redirect("/recipe/#{params[:recipe_id]}/ingredient")
end
