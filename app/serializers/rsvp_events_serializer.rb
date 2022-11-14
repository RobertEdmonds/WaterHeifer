class RsvpEventsSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_time, :end_time, :spots, :cost_per_person, :spaces_taken, :amount_owe, :reservation_id

  def spaces_taken
    trip = UserTrip.find_by(trip_id: object.id, user_id: self.scope.id)
    return trip.spaces
  end

  def amount_owe
    trip = UserTrip.find_by(trip_id: object.id, user_id: object.user_id)
    return trip.amount
  end

  def reservation_id
    trip = UserTrip.find_by(trip_id: object.id, user_id: object.user_id)
    return trip.id
  end
end
