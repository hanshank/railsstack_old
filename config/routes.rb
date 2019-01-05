Rails.application.routes.draw do
  get '/images/new', to: 'images#new' 
  resources :images

  resources :photos

  namespace :admin do
    root 'dashboard#index'  
    
    devise_for :admin_users,
    controllers: {
        :registrations => "admin/admin_users/registrations",
        :sessions => "admin/admin_users/sessions"
    }
    resources :posts, only: [:new, :index, :update, :create, :edit, :destroy ]
    put 'posts/:id/toggle_published', action: :toggle_published, controller: 'posts', as: "post/toggle_published"
  end
  
  namespace :api do
    namespace :v1 do 
      namespace :blog do
        get 'posts/search', to: 'posts#search'
        resources :posts, only: [:index, :show], param: :slug
      end
    end
  end

  get '*all', to: 'application#fallback_index_html', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }  
  
end
