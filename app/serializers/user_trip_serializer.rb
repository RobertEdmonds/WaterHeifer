class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :spaces 
  has_one :trip  
  has_one :user
end
