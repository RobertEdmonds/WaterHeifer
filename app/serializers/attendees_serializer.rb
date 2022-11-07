class AttendeesSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :show_spaces

  def show_spaces 
    ActiveModelSerializers.config.default_include = object.user_trips.select(:id, :spaces, :trip_id)
  end
end
