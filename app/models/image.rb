class Image < ApplicationRecord
    belongs_to :imageable, polymorphic: true, optional: true
    has_one_attached :file

    before_save :set_image_url

    validates :alt_attribute, :url, presence: true

    def set_image_url
        rails_blob_path(self.image.file) if self.image.file.attached?
    end
end