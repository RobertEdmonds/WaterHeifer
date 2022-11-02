class RsvpEventsSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_time, :end_time, :spots, :cost_per_person
end
