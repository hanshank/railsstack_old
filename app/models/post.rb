class Post < ApplicationRecord
  before_create :set_slug
  validates :slug, uniqueness: true
  validates :slug, uniqueness: { case_sensitive: false }

  private

  def set_slug
    self.slug = self.title.downcase.gsub(/\s+/, '-')
  end

  
end
