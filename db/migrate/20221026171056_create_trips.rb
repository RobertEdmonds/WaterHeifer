class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :location
      t.datetime :start_time
      t.datetime :end_time
      t.integer :spots
      t.integer :cost_per_person
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
