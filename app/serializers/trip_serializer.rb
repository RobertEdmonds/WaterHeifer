class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :start_time, :end_time, :description, :spots, :cost_per_person
  belongs_to :user 
  has_many :attendees, serializer: AttendeesSerializer

end
