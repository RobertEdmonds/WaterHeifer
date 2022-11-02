class ResponseBlogSerializer < ActiveModel::Serializer
  attributes :id, :post, :user 
  has_one :blog
  has_one :user
end
