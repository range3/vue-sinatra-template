require 'sinatra/base'

class BookChest < Sinatra::Base
  get '/hello' do
    'Hello World!'
  end
end
