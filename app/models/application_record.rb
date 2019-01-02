class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def set_image_url
    rails_blob_path(self.image.file)
  end

end
