class User < ApplicationRecord
    has_one_attached :image
    before_save :set_image_url

    def set_image_url
        super
    end

end
