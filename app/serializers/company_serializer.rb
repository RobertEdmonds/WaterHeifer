class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :tax_number, :description, :total_donation

end
