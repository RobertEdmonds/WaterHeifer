class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :company

  validates :amount, :company_id, {presence: true}
end
