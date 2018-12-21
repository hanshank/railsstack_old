class Post < ApplicationRecord
  before_create :set_slug
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

  
end
