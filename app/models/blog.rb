class Blog < ApplicationRecord
  belongs_to :user
  has_many :response_blogs, dependent: :destroy
  has_many :posters, through: :response_blogs, source: :user

  validates :title, presence: true, uniqueness: true 
  validates :post, presence: true, length: {minimum: 4}
end
