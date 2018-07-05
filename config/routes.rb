Rails.application.routes.draw do
  root 'home#index'
  get '/home', to: 'home#index'

  resources :books

  namespace :api do
    namespace :v1 do
      resources :authors, only: [:index]
      # API endpoint: api/v1/authors.json?author_id=___
    end
  end

end
