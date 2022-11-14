class UserTrip < ApplicationRecord
  belongs_to :user 
  belongs_to :trip

  validates :trip_id, uniqueness: {scope: [:user_id], message: "already has your reservation, try updating your previous reservation"}
  validate :valid_spots 

  def valid_spots
    trip = Trip.find_by(id: self.trip_id)
    if trip.spots < self.spaces 
      errors.add(:spaces, "must be lease or equal to the amount of available spots")
    end
  end
end
