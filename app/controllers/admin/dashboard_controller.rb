module Admin
    class DashboardController < ApplicationController
        before_action :authenticate_admin_admin_user!

        def index

        end
    end
end
