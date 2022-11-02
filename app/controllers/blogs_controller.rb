class BlogsController < ApplicationController
    skip_before_action :authorize, only: :index 
    before_action :user_permitted, only: [:create, :update, :destroy]
    
    def index 
        render json: Blog.all, status: :ok 
    end

    def show 
        blog = Blog.find(params[:id])
        render json: blog, status: :ok 
    end

    def create 
        blog = current_user.blogs.create!(blog_params)
        render json: blog, status: :created 
    end
    
    def update 
        blog = Blog.find(params[:id])
        blog.update(blog_params)
        render json: blog, status: :created 
    end

    def destroy 
        Blog.find(params[:id]).destroy 
        head :no_content
    end

    private 
    
    def blog_params 
        params.permit(:id, :title, :post)
    end

    def user_permitted 
        user_can_modify = current_user.admin? || current_user == @user_trip.user 
        render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
    end
end
