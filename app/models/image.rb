class Image < ApplicationRecord
    include Rails.application.routes.url_helpers
    attr_reader :url

    belongs_to :imageable, polymorphic: true, optional: true
    has_one_attached :file


end