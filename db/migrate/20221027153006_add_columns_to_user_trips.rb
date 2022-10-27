class AddColumnsToUserTrips < ActiveRecord::Migration[7.0]
  def change
    add_column :user_trips, :amount, :integer
    add_column :user_trips, :spaces, :integer
  end
end
