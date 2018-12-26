class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  before_create :set_slug
  before_save :set_image_url
  validates :slug, uniqueness: true
  validates :slug, uniqueness: { case_sensitive: false }

  has_one_attached :image

  belongs_to :user, optional: true

  private

  def set_slug
    self.slug = self.title.downcase.gsub(/\s+/, '-')
  end

  def published
    post = post.where.not(published_at: nil)
  end

  def set_image_url
   super
  end

  
end
