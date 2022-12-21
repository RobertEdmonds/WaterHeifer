class Api::FallbackController < ActionController::Base
    def index
      render file: 'public/index.html'
    end
  end