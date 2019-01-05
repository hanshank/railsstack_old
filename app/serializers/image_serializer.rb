class ImageSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :url

  

  def url 
    rails_blob_path(object.file)
  end
end
