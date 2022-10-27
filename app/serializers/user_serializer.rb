class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :employee
  
  has_many :trips
end
