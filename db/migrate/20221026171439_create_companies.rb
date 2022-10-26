class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :tax_number
      t.text :description
      t.integer :total_donation

      t.timestamps
    end
  end
end
