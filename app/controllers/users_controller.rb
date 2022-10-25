class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

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
        customer = Customer.find(session[:customer_id])
        customer.update(customer_params)
        render json: customer, status: :created 
    end

    private 

    def user_params 
        params.permit(:email, :password, :password_confirmation, :name, :phone_number)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end
end
