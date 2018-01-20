require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/namespace'

class BookChest < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end
  register Sinatra::Namespace

  namespace '/api/v1' do
    get '/hello' do
      'Hello World!'
    end
  end
end
