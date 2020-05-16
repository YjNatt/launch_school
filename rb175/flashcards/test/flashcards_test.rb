ENV["RACK_ENV"] = "test"

require "minitest/autorun"
require "rack/test"
require "fileutils"

require_relative "../flashcards.rb"

class AppTest < Minitest::Test
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def session
    last_request.env["rack.session"]
  end

  def admin_session
    { "rack.session" => { username: "admin" }}
  end

  def setup 
    FileUtils.mkdir_p(data_path)
  end

  def teardown
    FileUtils.rm_rf(data_path)
  end

  def create_admin_folder
    path = File.join(data_path, "admin")
    FileUtils.mkdir_p(path)
  end

  def create_test_deck
    file_name = File.join(data_path, "admin", "test.yml")
    File.new(file_name, "w")
  end

  def test_index
    get "/"
    assert_equal 200, last_response.status
    assert_includes last_response.body, %q(button type="submit">Sign in)
  end

  def test_valid_user_signin
    post "/", {username: "admin", password: "secret"}
    assert_equal 302, last_response.status
    assert_equal "admin", session[:username]
  end

  def test_invalid_credentials
    post "/", {username: "invalid", password: "invalid"}
    assert_nil session[:username]
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Invalid username or password"
  end

  def test_signout
    get "/admin/decks", {}, admin_session
    assert_includes last_response.body, "Welcome, admin"

    post "/signout"
    assert_equal 302, last_response.status
    assert_equal "You have signed out", session[:message]

    get last_response["Location"]
    assert_nil session[:username]
  end

  def test_display_decks_signed_out
    get "/admin/decks"
    assert_equal 302, last_response.status
    assert_equal "You must sign in first", session[:message]

    get last_response["Location"]
    assert_includes last_response.body, %q(button type="submit">Sign in)
  end

  def test_create_deck
    create_admin_folder
    post "/admin/decks", { name: "example" }, admin_session
    assert_equal 302, last_response.status
    assert_equal "Deck created", session[:message]

    get last_response["Location"]
    assert_includes last_response.body, "example"
  end

  def test_create_decks_signed_out
    create_admin_folder
    post "/admin/decks", { name: "example" }
    assert_equal 302, last_response.status
    assert_equal "You must sign in first", session[:message]
  end

  def test_create_deck_invalid_name
    create_admin_folder
    post "/admin/decks", { name: "!@2,." }, admin_session
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Deck name can only consist of alphabet characters and digits"
  end

  def test_create_deck_duplicate_name
    create_admin_folder
    create_test_deck
    post "/admin/decks", { name: "test" }, admin_session

    assert_equal 422, last_response.status
    assert_includes last_response.body, "Deck name already exists"
  end
end

