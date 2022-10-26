class ResponseBlogSerializer < ActiveModel::Serializer
  attributes :id, :post
  has_one :blog
  has_one :user
end
