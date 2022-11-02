class UserTrip < ApplicationRecord
  belongs_to :user 
  belongs_to :trip

  validates :trip_id, uniqueness: {scope: [:user_id], message: "Can't signup for same trip twice, try updating your previous reservation"}
end
