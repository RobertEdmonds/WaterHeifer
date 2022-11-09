class BlogsController < ApplicationController
    skip_before_action :authorize, only: [:index] 
    before_action :set_blog, only: [:show, :update, :destroy]
    before_action :user_permitted, only: [:create ,:update, :destroy]
    
    def index 
        render json: Blog.all, status: :ok 
    end

    def show 
        render json: @blog, status: :ok 
    end

    def create 
        new_blog = current_user.created_blogs.create!(blog_params)
        render json: new_blog, status: :created 
    end
    
    def update 
        @blog.update(blog_params)
        render json: @blog, status: :created 
    end

    def destroy 
        @blog.destroy 
        head :no_content
    end

    private 
    
    def blog_params 
        params.permit(:id, :title, :post)
    end

    def set_blog 
        @blog = Blog.find(params[:id])
    end

    def user_permitted 
        user_can_modify = current_user.employee? || current_user.id == @blog.user_id 
        render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
    end
end
