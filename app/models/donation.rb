class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :company

  has_many :company, dependent: :destroy
end
