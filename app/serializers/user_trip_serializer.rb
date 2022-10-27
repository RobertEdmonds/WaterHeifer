class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :creator
  has_one :user
  has_many :attendees, class_name: "User" 
  has_one :trip

  def creator
    object.user.name 
  end
end
