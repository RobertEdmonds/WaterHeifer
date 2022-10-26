class AddNewColumnsTrips < ActiveRecord::Migration[7.0]
  def change
    add_column :trips, :title, :string 
    add_column :trips,:description, :text
  end
end
