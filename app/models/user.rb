class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "Only allows letters" } 
    validates :phone_number, presence: true, uniqueness: true, numericality: { only_integer: true }, length: { minimum: 10, maximum: 12 }
    validates :password, confirmation: true  
    validates :password_confirmation, presence: true

    has_many :created_trips, class_name: "Trip", dependent: :destroy
    has_many :user_trips 
    has_many :rsvp_events, through: :user_trips, source: :trip 
    has_many :created_blog, class_name: "Blog", dependent: :destroy

end
