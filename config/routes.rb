Rails.application.routes.draw do
  namespace :api do
    post 'uploads/prepare'
  end
  resources :pictures, only: [:index, :create]
  resources :response_blogs, only: [:index, :create, :update, :destroy]
  resources :blogs
  resources :donations, only: [:create, :update, :destroy]
  resources :companies
  resources :user_trips, only: [:create, :update, :destroy]
  resources :trips
  resources :users, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: "sessions#destroy"
  patch "/user_update", to: 'users#update'
  patch "/user_employee_update/:id", to: 'users#update_employee'
  # Defines the root path route ("/")
  # root "articles#index"
end
