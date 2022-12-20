class API::FallbackController < ActionController::Base
    def index
      render file: 'public/index.html'
    end
  end