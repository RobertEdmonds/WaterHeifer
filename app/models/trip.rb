class Trip < ApplicationRecord
  belongs_to :user
  has_many :user_trips, dependent: :destroy
  has_many :attendees, through: :user_trips, source: :user

  validates :title, :location, :start_time, :end_time, :spots, :cost_per_person, :description, {presence: true}
  validates :location, uniqueness: {scope: [:title, :start_time, :end_time]} 

end
