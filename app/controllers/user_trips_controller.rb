class UserTripsController < ApplicationController
    before_action :authorize_user, only: [:update, :destroy]

    def create 
      user_trip = current_user.user_trips.create!(user_trip_params)
      trip_update = Trip.find(params[:trip_id])
      trip_update.update(spots: (trip_update.spots - params[:spaces]))
      render json: user_trip, status: :created 
    end
    
    def update 
      user_trip = UserTrip.find(params[:id])
      user_trip.update!(update_user_trip_params)
      render json: user_trip, status: :created 
    end
    
    def destroy 
      UserTrip.find(params[:id]).destroy 
      head :no_content
    end
    
    private 
    
    def user_trip_params 
      params.permit(:trip_id, :amount, :spaces)
    end
    
    def update_user_trip_params
      params.permit(:amount, :spaces)
    end

    def authorize_user
      user_can_modify = current_user.admin? || current_user == @user_trip.user 
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
    end
end
