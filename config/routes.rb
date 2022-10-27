Rails.application.routes.draw do
  resources :response_blogs
  resources :blogs
  resources :donations
  resources :companies
  resources :user_trips
  resources :trips
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: "sessions#destroy"
  patch "/user_update", to: 'users#update'
  # Defines the root path route ("/")
  # root "articles#index"
end
