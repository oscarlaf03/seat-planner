Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: {format: 'json'} do
    # resources :seats, only:[:index, :create, :calculate]
    get 'seats', to: 'seats#index'
  end
  namespace :v1, defaults: {format: 'json'} do
    # resources :seats, only:[:index, :create, :calculate]
    post 'seats', to: 'seats#calculate'

  end
  get '*page', to: 'static#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
