class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :post, :user_can_modify
  has_one :user

  def user_can_modify
    user.employee || user == self.object.user
  end
end
