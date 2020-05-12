ENV["RACK_ENV"] = "test"

require "minitest/autorun"
require "rack/test"
require "fileutils"

require_relative "../cms.rb"

class AppTest < Minitest::Test
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def setup
    FileUtils.mkdir_p(data_path)
  end

  def teardown
    FileUtils.rm_rf(data_path)
  end

  def session
    last_request.env["rack.session"]
  end

  def admin_session
    { "rack.session" => { username: "admin" } }
  end

  def create_document(name, content = "")
    File.open(File.join(data_path, name), "w") do |file|
      file.write(content)
    end
  end

  def test_index
    create_document "about.md"
    create_document "changes.txt"
    get "/"

    assert_equal 200, last_response.status
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert_includes last_response.body, "about.md"
    assert_includes last_response.body, "changes.txt"
  end

  def test_history
    create_document "history.txt", "History text"

    get "/history.txt"

    assert_equal 200, last_response.status
    assert_equal "text/plain", last_response["Content-Type"]
    assert_includes last_response.body, "History text"
  end

  def test_document_not_found
    get "/notafile.ext"
    assert_equal 302, last_response.status
    assert_equal  "notafile.ext does not exist.", session[:message]
  end

  def test_markdown
    create_document "about.md", "**bold**"
    get "/about.md"

    assert_equal 200, last_response.status
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert_includes last_response.body, "<strong>bold</strong>" 
  end

  def test_editing_document
    create_document "history.txt"
    get "/history.txt/edit", {}, admin_session

    assert_equal 200, last_response.status
    assert_includes last_response.body, "<textarea"
    assert_includes last_response.body, '<button type="submit"'
  end

  def test_editing_document_signed_out
    create_document "history.txt"

    get "/history.txt/edit"

    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_updating_document
    post "/history.txt", {content: "History text has been updated"}, admin_session

    assert_equal 302, last_response.status
    assert_equal "history.txt has been edited", session[:message]

    get "/history.txt"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "History text has been updated"
  end

  def test_updating_document_signed_out
    post "/history.txt", {content: "Invalid text"}

    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_view_new_document_form
    get "/new", {}, admin_session

    assert_equal 200, last_response.status
    assert_includes last_response.body, "<input"
    assert_includes last_response.body, %q(<button type="submit")
  end

  def test_view_new_document_form_signed_out
    get "/new"

    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_creating_document
    post "/create", {filename: "text.txt"}, admin_session
    assert_equal 302, last_response.status
    assert_equal "text.txt was created.", session[:message]
    
    get "/"
    assert_includes last_response.body, "<a href=\"/text.txt\">text.txt"
  end

  def test_creating_document_signed_out
    post "/create", {filename: "invalid"}

    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_create_document_with_no_filename
    post "/create", {filename: ""}, admin_session
    assert_equal 422, last_response.status
    assert_includes last_response.body, "A name is required"
  end

  def test_delete_document
    create_document "test_file.txt"

    post "/test_file.txt/delete", {}, admin_session
    assert_equal 302, last_response.status
    assert_equal "test_file.txt has been deleted.", session[:message]

    get "/"
    refute_includes last_response.body, %q(href="/test_file.txt")
  end

  def test_delete_document_signed_out
    create_document "test_file.txt"

    post "/test_file.txt/delete"
    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_signin_form
    get "/users/signin"

    assert_equal 200, last_response.status
    assert_includes last_response.body, "Password" 
    assert_includes last_response.body, %q(<button type="submit")
  end

  def test_signin
    post "/users/signin", username: "admin", password: "secret"
    assert_equal 302, last_response.status
    assert_equal "Welcome!", session[:message]
    assert_equal "admin", session[:username]

    get last_response["Location"]
    assert_includes last_response.body, "Signed in as admin"
  end

  def test_invalid_sign_in_credentials
    post "/users/signin", username: "invalid", password: "invalid"
    assert_equal 422, last_response.status
    assert_nil session[:username]
    assert_includes last_response.body, "Invalid Credentials"
  end

  def test_signout
    get "/", {}, admin_session
    assert_includes last_response.body, "Signed in as admin"
    

    post "/users/signout"
    assert_equal 302, last_response.status
    assert_equal "You have been signed out.", session[:message]

    get last_response["Location"]
    assert_nil session[:username]
    assert_includes last_response.body, "Sign In"
  end
end
