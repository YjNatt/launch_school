ENV["RACK_ENV"] = "test"

require "minitest/autorun"
require "rack/test"
require "fileutils"

require_relative "../cook_book.rb"

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
    file_path = File.join(data_path, 'recipies.yml')
    File.new(file_path, 'w+')
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
    assert_includes last_response.body, "Kimchi stew"
  end
end
