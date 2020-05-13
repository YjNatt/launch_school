require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"
require "yaml"

configure do
  enable :sessions
  set :session_secret, 'secret'
end
