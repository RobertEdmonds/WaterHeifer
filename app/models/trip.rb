class Trip < ApplicationRecord
  belongs_to :employee, class_name: "User"
  has_many :user_trips, dependent: :destroy
  has_many :attendees, through: :user_trips, source: :user
end
