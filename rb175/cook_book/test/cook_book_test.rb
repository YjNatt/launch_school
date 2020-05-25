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
end
