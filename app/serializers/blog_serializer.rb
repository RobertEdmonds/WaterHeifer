class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :user
  has_many :posters
end
