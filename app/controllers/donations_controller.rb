class DonationsController < ApplicationController
    before_action :set_donation, only: [:update, :destroy]
    before_action :authorize_user

    def create 
        new_donation = current_user.donations.create!(donation_params)
        found_company = Company.find(new_donation.company_id)
        found_company.update(total_donation: (found_company.total_donation + new_donation.amount))
        render json: new_donation,status: :created 
    end
    
    def update 
        found_company = Company.find(@donation.company_id)
        found_company.update(total_donation: (found_company.total_donation - @donation.amount))
        @donation.update(donation_params)
        found_company.update(total_donation: (found_company.total_donation + @donation.amount))
        render json: @donation, status: :created
    end

    def destroy 
        found_company = Company.find(@donation.company_id)
        found_company.update(total_donation: (found_company.total_donation - @donation.amount))
        @donation.destroy
        head :no_content
    end

    private 

    def donation_params 
        params.permit(:amount, :company_id)
    end

    def set_donation 
        @donation = Donation.find(params[:id])
    end
 
    def authorize_user
        user_can_modify = current_user.admin? || current_user == @donation.user 
        render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
    end
end
