class TripSerializer < ActiveModel::Serializer
  attributes :id, :location, :start_time, :end_time, :spots, :cost_per_person, :user_can_modify
  has_one :user

  def user_can_modify
    user.employee?
  end
end
