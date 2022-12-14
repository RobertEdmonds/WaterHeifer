class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
    validates :phone_number, presence: true, uniqueness: true, numericality: { only_integer: true }, length: { minimum: 10, maximum: 12 }
    validates :password, confirmation: true  
    # validates :password_confirmation, presence: true

    has_many :created_trips, class_name: "Trip", dependent: :destroy
    has_many :user_trips 
    has_many :rsvp_events, through: :user_trips, source: :trip 
    has_many :created_blogs, class_name: "Blog", dependent: :destroy
    has_many :response_blogs
    has_many :blogs, through: :response_blogs
    has_many :donations
    has_many :companies, through: :donations 

end
