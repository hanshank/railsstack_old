class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    before_action :authenticate_admin_admin_user!


    def fallback_index_html
        render :file => 'public/index.html', :layout => false
    end
end
