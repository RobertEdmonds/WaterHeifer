class ResponseBlogsController < ApplicationController
    before_action :set_response, only: [:update, :destroy]
    before_action :authorize_user, only: [ :update, :destroy ]

    def index 
        render json: ResponseBlog.all, status: :ok 
    end

    private 

    def response_params
        params.permit(:post, :blog_id, :user_id)
    end

    def set_response
        @response = ResponseBlog.find(params[:id])
    end

    def authorize_user 
        user_can_modify = current_user.employee? || current_user == @response.user 
        render json: { error: "No Touchy" }, status: :forbidden unless user_can_modify
    end
end
