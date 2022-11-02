class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :spaces, :trip_id
  has_one :trip
  has_one :user
  
end
