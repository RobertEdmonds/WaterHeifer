class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_time, :end_time, :spots, :cost_per_person
  has_one :user
  has_many :user_trips 
  # has_many :attendees, through: :user_trips, source: :user 

  # def user_can_modify
  #   current_user.employee?
  # end
end
