class Photo < ApplicationRecord
    attr_accessor :image_url
    has_one_attached :file
    include Rails.application.routes.url_helpers


    def image_url
        rails_blob_path(self.file)
    end
end

