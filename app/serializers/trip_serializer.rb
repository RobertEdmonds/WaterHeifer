class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_time, :end_time, :spots, :cost_per_person
  belongs_to :user 
  has_many :attendees, serializer: AttendeesSerializer

end
