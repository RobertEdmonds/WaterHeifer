class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :post
  has_one :user
  has_many :responders
end
