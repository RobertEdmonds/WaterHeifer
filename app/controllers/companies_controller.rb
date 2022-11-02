class CompaniesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    before_action :authorize_user, only: [:create, :update, :destroy]

    def index
        render json: Company.all, status: :ok 
    end

    def create 
        company = Company.create!(company_params)
        render json: company, status: :created 
    end

    def show 
        company = Company.find(params[:id])
        render json: company, status: :ok 
    end

    def update 
        company = Company.find(params[:id])
        company.update!(company_params)
        render json: company, status: :created 
    end

    def destroy 
        company = Company.find(params[:id])
        company.destroy 
        head :no_content
    end

    private 

    def company_params
        params.permit(:name, :tax_number, :description)
    end

    def authorize_user
        user_can_modify = current_user.employee?
        render json: { error: "No touchy!" }, status: :forbidden unless user_can_modify
    end
end
