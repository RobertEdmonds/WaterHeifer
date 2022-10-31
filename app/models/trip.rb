class Trip < ApplicationRecord
  belongs_to :user
  has_many :user_trips, dependent: :destroy
  has_many :attendees, through: :user_trips, source: :user

  # def creator 
  #   byebug
  #   User.find(object.user_id) 
  # end
end
