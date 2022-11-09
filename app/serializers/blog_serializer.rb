class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :post
  has_one :user
  has_many :response_blogs
  has_many :responders
end
