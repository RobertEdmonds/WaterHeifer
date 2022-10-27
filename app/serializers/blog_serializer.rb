class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :post
  has_one :user

  has_many :response_blogs do 
    object.response_blogs.order(:created_at)
  end
end
