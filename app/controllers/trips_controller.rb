class API::TripsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    before_action :set_trip, only: [:show, :update, :destroy]
    before_action :authorize_user, only: [:create, :update, :destroy]

    def index 
        render json: Trip.all, status: :ok 
    end

    def show 
        render json: @trip, status: :ok
    end

    def create 
        new_trip = current_user.created_trips.create!(trip_params)
        render json: new_trip, status: :created 
    end

    def update 
        @trip.update!(trip_params)
        render json: @trip, status: :created 
    end

    def destroy 
        @trip.destroy 
        head :no_content
    end

    private 

    def trip_params 
        params.permit(:title, :description, :start_time, :end_time, :location, :spots, :cost_per_person)
    end

    def set_trip
        @trip = Trip.find(params[:id])
    end

    def authorize_user 
        user_can_modify = current_user.employee?
        render json: { errors: "No touchy!" }, status: :forbidden unless user_can_modify
    end
end
