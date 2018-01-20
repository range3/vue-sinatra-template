require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/namespace'

require_relative'controllers/static_controller'

class BookChest < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
    enable :logging
  end

  configure do
    set :public_folder,
      File.expand_path('../public', File.dirname(__FILE__))
  end

  register Sinatra::Namespace

  register StaticController

  namespace '/api/v1' do
    get '/hello' do
      puts settings.root
      'Hello World!'
    end
  end
end
