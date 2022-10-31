class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_time, :end_time, :spots, :cost_per_person, :user
  has_one :user
  has_many :attendees, through: :user_trips, source: :user do
    object.attendees.order(:id)
  end
  has_many :user_trips do 
    object.user_trips.order(:user_id)
  end

end
