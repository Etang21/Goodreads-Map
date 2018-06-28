Rails.application.routes.draw do
  resources :books
  root 'books#index'
  get '/user', to: 'user#index'
end
