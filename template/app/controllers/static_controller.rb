require 'sinatra/extension'

module StaticController
  extend Sinatra::Extension

  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end
