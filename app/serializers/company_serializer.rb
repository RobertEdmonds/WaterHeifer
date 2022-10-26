class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :tax_number, :description, :total_donation, :user_can_modify

  def user_can_modify
    user.employee
  end
end
