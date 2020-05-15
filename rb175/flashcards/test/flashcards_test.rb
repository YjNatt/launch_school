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

end

