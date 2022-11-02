class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :employee
  has_many :rsvp_events, serializer: RsvpEventsSerializer 
  has_many :user_trips 
  has_many :created_trips 

end
