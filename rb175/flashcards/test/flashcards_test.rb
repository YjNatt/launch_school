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

  def create_admin_file
    file_name = File.join(data_path, "admin.yml")
    test_deck = Deck.new("test")
    test_flashcard = Flashcard.new("This is the front", "This is the back")
    test_deck.add(1, test_flashcard)
    File.open(file_name, "w") { |file| file.write({ 1 => test_deck }.to_yaml ) }
  end

  def load_admin_decks
    file_name = File.join(data_path, "admin.yml")
    YAML.load_file(file_name)
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
    create_admin_file
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
    create_admin_file
    post "/admin/decks", { name: "example" }, admin_session
    assert_equal 302, last_response.status
    assert_equal "Deck created", session[:message]

    get last_response["Location"]
    assert_includes last_response.body, "example"
  end

  def test_create_decks_signed_out
    create_admin_file
    post "/admin/decks", { name: "example" }
    assert_equal 302, last_response.status
    assert_equal "You must sign in first", session[:message]
  end

  def test_create_deck_invalid_name
    create_admin_file
    post "/admin/decks", { name: "!@2,." }, admin_session
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Deck name can only consist of alphabet characters and digits"
  end

  def test_create_deck_duplicate_name
    create_admin_file
    post "/admin/decks", { name: "test" }, admin_session
    post "/admin/decks", { name: "test" }, admin_session

    assert_equal 422, last_response.status
    assert_includes last_response.body, "Deck name already exists"
  end

  def test_delete_deck
    create_admin_file
    assert_equal false, load_admin_decks.empty?

    post "/admin/decks/1/delete", {}, admin_session
    assert_equal 302, last_response.status
    assert_equal "Deck deleted", session[:message]

    get last_response["Location"]
    assert_equal true, load_admin_decks.empty?
  end

  def test_delete_deck_signed_out
    create_admin_file
    post "/admin/decks/1/delete"
    assert_equal 302, last_response.status
    assert_equal "You must sign in first", session[:message]
  end

  def test_view_individual_deck
    create_admin_file
    get "/admin/decks/1", {}, admin_session
    assert_equal 200, last_response.status
    assert_includes last_response.body, "Edit deck name"
  end

  def test_view_individual_deck_signed_out
    create_admin_file
    get "/admin/decks/1"
    assert_equal 302, last_response.status
    assert_equal "You must sign in first", session[:message]
  end

  def test_create_flashcard_view
    create_admin_file
    get "/admin/decks/1/flashcard/new", {}, admin_session
    assert_equal 200, last_response.status
    assert_includes last_response.body, %q(for="front">Front:)
  end

  def test_create_flashcard
    create_admin_file
    post "/admin/decks/1/flashcard", {front: "hello", back: "world"}, admin_session
    assert_equal 302, last_response.status
    assert_equal "Flashcard created", session[:message]
  end

  def test_create_flashcard_signed_out
    create_admin_file
    post "/admin/decks/1/flashcard", {front: "hello", back: "world"}
    assert_equal 302, last_response.status
    assert_equal "You must sign in first", session[:message]
  end

  def test_create_flashcard_invalid_fields
    create_admin_file
    post "/admin/decks/1/flashcard", {front: "", back: "world"}, admin_session
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Front and back must be filled out"
  end
  
  def test_display_all_flashcards_view
    create_admin_file
    get "/admin/decks/1/flashcards", {}, admin_session
    assert_equal 200, last_response.status
    assert_includes last_response.body, "This is the front"
  end

  def test_display_all_flashcards_view_signed_out
    create_admin_file
    get "/admin/decks/1/flashcards"
    assert_equal 302, last_response.status
    assert_equal "You must sign in first", session[:message]
  end
end

