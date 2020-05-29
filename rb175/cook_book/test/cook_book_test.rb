ENV["RACK_ENV"] = "test"

require "minitest/autorun"
require "rack/test"
require "fileutils"
require 'yaml'

require_relative "../cook_book.rb"
require_relative "../lib/recipe.rb"

class AppTest < Minitest::Test
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def session
    last_request.env["rack.session"]
  end

  def setup
    FileUtils.mkdir_p(data_path)
    file_path = File.join(data_path, 'recipes.yml')
    recipe = { 1 => Recipe.new("test recipe") }

    File.open(file_path, 'w') do |file|
      file.write(recipe.to_yaml)
    end
  end

  def teardown
    FileUtils.rm_rf(data_path)
  end

  def test_index
    get "/"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "Welcome to Cook Book"
  end

  def test_recipe_form
    get "/recipe/new"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "Create Recipe"
  end

  def test_create_recipe
    post "/recipe", { "title" => "Kimchi stew" }
    assert_equal 302, last_response.status
    assert_equal "Recipe has been created", session[:message]

    get last_response["Location"]
    assert_includes last_response.body, "Kimchi stew"
  end

  def test_delete_recipe
    get "/"
    assert_includes last_response.body, "test recipe"

    post "/recipe/1/delete"
    assert_equal 302, last_response.status
    assert_equal = "Recipe has been delete", session[:message]

    get last_response["Location"]
    refute_includes last_response.body, "test recipe"
  end

  def test_add_ingredient_view
    get "/recipe/1/ingredient"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "<h3>test recipe</h3>"
  end

  def test_add_ingredient
    post "/recipe/1/ingredient", {"ingredient" => "ingredient 1"}
    assert_equal 302, last_response.status

    get last_response["Location"]
    assert_includes last_response.body, "ingredient 1"
  end

  def test_add_invalid_ingredient
    post "/recipe/1/ingredient", {"ingredient" => ""}
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Ingredient cannot be empty"
  end

  def test_delete_ingredient
    post "/recipe/1/ingredient", {"ingredient" => "ingredient 1"}
    get last_response["Location"]
    assert_includes last_response.body, "ingredient 1"

    post "/recipe/1/ingredient/1/delete"
    assert_equal session[:message], "Ingredient deleted"
    get last_response["Location"]
    refute_includes last_response.body, "ingredient 1"
  end

  def test_edit_ingredient_form
    get "/recipe/1/ingredient/1/edit"
    assert_equal 200, last_response.status
    assert_includes last_response.body, ">Edit ingredient"
  end

  def test_edit_ingredient
    post "/recipe/1/ingredient/1", {"ingredient" => "new ingredient"}
    assert_equal 302, last_response.status
    assert_equal session[:message], "Ingredient updated"

    get last_response["Location"]
    assert_includes last_response.body, "new ingredient"
    refute_includes last_response.body, "ingredient 1"
  end

  def test_edit_ingredient_invalid
    post "/recipe/1/ingredient/1", {"ingredient" => " "}
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Ingredient cannot be empty"
    assert_includes last_response.body, %q(value=" ")
  end
end
