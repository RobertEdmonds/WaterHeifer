class Company < ApplicationRecord
    has_many :donations, dependent: :destroy 
    has_many :users, through: :donations  
    
    validates :name, presence: true, uniqueness: true 
    validates :tax_number, presence: true, uniqueness: true 
    validates :description, presence: true 
end
