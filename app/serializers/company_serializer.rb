class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :tax_number, :description, :total_donation
  has_many :donations
  has_many :users, through: :donations

end
