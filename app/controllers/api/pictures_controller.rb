class Api::PicturesController < ApplicationController
  skip_before_action :authorize, only: [:index]
    def index 
      render json: Picture.all, status: :ok
    end

    def create
        picture = Picture.create(update_picture_params)
        render json: picture, status: :created 
    end
    
    private
      
    def update_picture_params
      params.permit(:picture_url)
    end
end
