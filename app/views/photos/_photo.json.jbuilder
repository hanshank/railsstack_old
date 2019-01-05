json.extract! photo, :id, :file, :image_url, :image_data, :created_at, :updated_at
json.url photo_url(photo, format: :html)
json.image_url photo.image_url
