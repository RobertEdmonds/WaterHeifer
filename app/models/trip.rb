class Trip < ApplicationRecord
  belongs_to :user
  has_many :user_trips, dependent: :destroy
  has_many :attendees, through: :user_trips, source: :user

  validates :title, :location, :start_time, :end_time, :spots, :cost_per_person, :description, {presence: true}
  validates :location, uniqueness: {scope: [:title, :start_time, :end_time]} 

  validate :right_time 

  def right_time
    if !self.end_time.after?(self.start_time)
      errors.add(:start_time, "must be earlier than end time")
    end
  end

end
