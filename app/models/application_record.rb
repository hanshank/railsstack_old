class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def set_image_url
    if Rails.env.development?
      self.image_url = "https://source.unsplash.com/random"
    else
      if self.image.attached?
        self.image_url = self.image.service_url
      end
    end
  end

  def image_url
    rails_blob_path(self.image) if self.image.attached?
  end
end
