Rails.application.routes.draw do
  root 'home#index'
  get '/home', to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :user, only: [:index] #Takes user_id param
      resources :authors, only: [:index] #Takes author_id param
      resources :shelves, only: [:index] #Takes user_id param
    end
  end

end
