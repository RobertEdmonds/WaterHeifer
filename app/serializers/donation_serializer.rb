class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :user_id, :company_id
  has_one :user
  has_one :company
end
