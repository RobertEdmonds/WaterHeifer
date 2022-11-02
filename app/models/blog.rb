class Blog < ApplicationRecord
  belongs_to :user
  has_many :response_blogs, dependent: :destroy
  has_many :poster, through: :response_blogs, source: :user
end
