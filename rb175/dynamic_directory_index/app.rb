require "sinatra"
require "tilt/erubis"

def get_file_names
 Dir.glob("public/*").map do |file|
    file.delete_prefix('public/')
  end.sort
end

get "/" do
  @files = get_file_names
  @files.reverse! if params["sort"] == "descending"
  erb :home
end
