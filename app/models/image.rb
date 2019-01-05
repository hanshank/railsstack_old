class Image < ApplicationRecord
    include Rails.application.routes.url_helpers
    attr_accessor :url, :set_image_url, :image_url

    belongs_to :imageable, polymorphic: true, optional: true
    has_one_attached :file

    def set_image_url
        rails_blob_path(self.file)
    end

    def image_url
        rails_blob_path(self.file)
    end


end