Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  namespace :api do
    namespace :v1 do
      
      namespace :blog do
        resources :posts, param: :slug
      end
      
    end
  end
end
