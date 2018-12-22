class Post < ApplicationRecord

  before_create :set_slug
  before_save :set_image_url
  validates :slug, uniqueness: true
  validates :slug, uniqueness: { case_sensitive: false }

  has_one_attached :image

  private

  def set_slug
    self.slug = self.title.downcase.gsub(/\s+/, '-')
  end

  def published
    post = post.where.not(published_at: nil)
  end

  def set_image_url
    if Rails.env.development?
      self.image_url = "https://source.unsplash.com/random"
    else
      if self.image.attached?
        self.image_url = self.image.service_url
      end
    end
  end

  
end
