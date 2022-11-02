class ResponseBlogsController < ApplicationController
    before_action :set_response, only: [:update, :destroy]
    before_action :authorize_user, only: [ :update, :destroy ]

    def index 
        render json: ResponseBlog.all, status: :ok 
    end

    def create 
        new_response = current_user.response_blogs.create!(response_params)
        render json: new_response, status: :created
    end

    def update 
        @response.update(response_params)
        render json: @response, status: :created 
    end

    def destroy 
        @response.destroy
        head :no_content
    end

    private 

    def response_params
        params.permit(:post, :blog_id)
    end

    def set_response
        @response = ResponseBlog.find(params[:id])
    end

    def authorize_user 
        user_can_modify = current_user.employee? || current_user == @response.user 
        render json: { error: "No Touchy" }, status: :forbidden unless user_can_modify
    end
end
