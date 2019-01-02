Rails.application.routes.draw do


  resources :photos
  resources :media_attachments
  namespace :admin do
    get '', to: 'dashboard#index', as: '/admin'
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
        resources :posts, param: :slug
      end
      
    end
  end

  get '*all', to: 'application#fallback_index_html', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }  
  
end
