class Blog < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :response_blogs, dependent: :destroy
  has_many :posters, through: :response_blogs, source: :user
end
