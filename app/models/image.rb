class Image < ApplicationRecord
    include Rails.application.routes.url_helpers


    belongs_to :imageable, polymorphic: true, optional: true
    has_one_attached :file

    before_save :set_file_url

    validates :alt_attribute, presence: true

    def set_file_url
        self.url = rails_blob_path(self.file) if self.file.attached?
    end
end