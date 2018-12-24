Rails.application.routes.draw do
  
  resources :videos
  resources :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  namespace :api do
    namespace :v1 do
      
      namespace :blog do
        resources :posts, param: :slug
      end
      
    end
  end

  get '/*path', to: 'application#fallback_index_html'
end
