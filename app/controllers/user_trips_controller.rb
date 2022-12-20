class API::UserTripsController < ApplicationController
    before_action :set_user_trip, only: [:update, :destroy]
    before_action :set_trip, only: [:update, :destroy]
    before_action :authorize_user, only: [:update, :destroy]

    def create 
      user_trip = current_user.user_trips.create!(user_trip_params)
      trip_update = Trip.find(params[:trip_id])
      trip_update.update(spots: (trip_update.spots - params[:spaces]))
      render json: user_trip, status: :created 
    end
    
    def update
      @trip.update(spots: (@trip.spots + @user_trip.spaces))
      @user_trip.update!(user_trip_params)
      @trip.update(spots: (@trip.spots - @user_trip.spaces))
      render json: @user_trip, status: :created 
    end
    
    def destroy 
      @trip.update(spots: (@trip.spots + @user_trip.spaces))
      @user_trip.destroy 
      head :no_content
    end
    
    private 
    
    def user_trip_params 
      params.permit(:trip_id, :amount, :spaces)
    end

    def set_user_trip
      @user_trip = UserTrip.find_by(user_id: current_user.id)
    end

    def set_trip 
      @trip = Trip.find(@user_trip.trip_id)
    end

    def authorize_user
      user_can_modify = current_user.employee? || current_user.id == @user_trip.user_id
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
    end
end
