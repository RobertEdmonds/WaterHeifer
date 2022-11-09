class Company < ApplicationRecord
    has_many :donations 
    
    validates :name, presence: true, uniqueness: true 
    validates :tax_number, presence: true, uniqueness: true 
    validates :description, presence: true 
end
