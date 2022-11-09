class ResponseBlog < ApplicationRecord
  belongs_to :blog
  belongs_to :user 

  validates :post, presence: true 
  validates :blog_id, presence: true 
end
