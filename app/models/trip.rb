class Trip < ApplicationRecord
  belongs_to :user
  has_many :user_trips, dependent: :destroy
  has_many :attendees, class_name: "User"
end
