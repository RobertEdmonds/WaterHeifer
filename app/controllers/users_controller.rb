class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    # before_action :authorize_user, only: [:index] 
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

    def index 
        render json: User.all, status: :ok 
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end

    def show 
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def update
        user = Customer.find(session[:user_id])
        user.update(user_params)
        render json: user, status: :created 
    end

    private 

    def user_params 
        params.permit(:email, :password, :password_confirmation, :name, :phone_number)
    end

    def authorize_user
        user_can_see = current_user.employee?
        render json: { error: "Ah ah ah, you didn't say the magic word" }, status: :forbidden unless user_can_see
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end
end
