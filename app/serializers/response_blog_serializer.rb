class ResponseBlogSerializer < ActiveModel::Serializer
  attributes :id, :post, :user_id 
  has_one :blog
  has_one :user
end
