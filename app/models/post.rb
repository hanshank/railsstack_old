class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  before_create :set_slug
  validates :slug, uniqueness: true
  validates :slug, uniqueness: { case_sensitive: false }

  belongs_to :user, optional: true
  has_one :image, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :image

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
