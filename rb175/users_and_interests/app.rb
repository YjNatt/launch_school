require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "yaml"

before do
  @data = YAML.load_file("users.yaml")
  @users = @data.keys
end

get "/" do
  redirect "/users"
end

get "/users" do
  erb :users
end

get "/users/:name" do
  @user = params['name'].to_sym 
  @email = @data[@user][:email]
  @interests = @data[@user][:interests]

  erb :user
end

not_found do
  "page not found"
end

helpers do
  def count_interests
    @data.reduce(0) do |total, info|
      info[1][:interests].size + total
    end
  end
end
