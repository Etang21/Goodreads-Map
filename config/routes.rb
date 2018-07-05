Rails.application.routes.draw do
  resources :books
  root 'books#index'
  get '/user', to: 'user#index'
  get '/demographics', to: 'books#demographics'

  namespace :api do
    namespace :v1 do
      resources :authors, only: [:index]
    end
  end

end
