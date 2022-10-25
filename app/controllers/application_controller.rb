class ApplicationController < ActionController::API
    include ActionController::Cookies 
    before_action :authorize 
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

    private 

    def authorize
        @user = User.find_by(id: session[:user_id])
        return render json: { errors: ["Not authorize customer"] }, status: :unauthorized unless @user
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end 
end
