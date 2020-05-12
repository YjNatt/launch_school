ENV["RACK_ENV"] = "test"
require "minitest/autorun"
require "rack/test"
require "fileutils"

require_relative "../contact_list.rb"

class AppTest < MiniTest::Test
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

  def create_document(name, content="")
    File.open((File.join(data_path, name)), "w") do |file|
      file.write(content)
    end
  end

  def session
    last_request.env["rack.session"]
  end

  def test_creating_user
    create_document "users.yml", {}

    post "/signup", {username: "test", password: "123"}
    assert_equal 302, last_response.status
    assert_equal "Account has been created.", session[:message]

    file_path = File.join(data_path, "users.yml")
    assert_includes YAML.load_file(file_path), "test"
  end

  def test_creating_user_with_existing_username
    create_document "users.yml", 'test: "password"'
    file_path = File.join(data_path, "users.yml")

    post "/signup", {username: "test", password: "newPassword"}
    
    assert_equal 422, last_response.status
    refute_includes YAML.load_file(file_path), "newPassword"
    assert_includes last_response.body, "Username already exists"
  end

  def test_creating_user_with_no_username
    create_document "users.yml", {}
    post "/signup", {username: "", password: "password"}
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Username cannot be empty"
  end

  def test_creating_user_with_no_password
    create_document "users.yml", {}
    post "/signup", {username: "test", password: ""}
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Password cannot be empty"
  end

  def test_creating_user_with_invalid_characters_in_password
    create_document "users.yml", {}
    post "/signup", {username: "test", password: "!@#"}
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Password must only contain letters and digits"
  end

  def test_signin_valid_user
    create_document "users.yml", 'test: "password"'
    post "/signin", {username: "test", password: "password"}
    assert_equal 302, last_response.status
    assert_equal "Welcome test!", session[:message]
    assert_equal "test", session[:username]
  end

  def test_signin_invalid_user
    create_document "users.yml", {}
    post "/signin", {username: "invalid", password: "invalid"}
    assert_equal 422, last_response.status
    assert_includes last_response.body, "Invalid username or password"
  end
end
