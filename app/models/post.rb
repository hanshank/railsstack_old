class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  before_save :set_slug
  validates :slug, uniqueness: true
  validates :slug, uniqueness: { case_sensitive: false }

  belongs_to :admin_user
  has_one :image, as: :imageable, dependent: :destroy

  accepts_nested_attributes_for :image, allow_destroy: true

  def toggle_published
    self.published_at.blank? ? self.update_attributes(published_at: Time.zone.now) : self.update_attributes(published_at: nil)
  end

  def should_generate_new_slug?
    self.slug.blank? || self.title_changed?
  end

  def as_json(options = {})
    super.as_json(options).merge!(published_date: published_date, image: {url: set_image_url}, admin_user: {name: self.admin_user.name, image: {url: admin_user_image_url}})
  end

  def set_image_url
    super
  end

  def admin_user_image_url
    rails_blob_path(self.admin_user.image.file)
  end

  def yoyo
    "#{self}"
  end

  def published_date
    self.published_at.strftime("%e %b, %Y")
  end

  def self.search(query)
      all_posts = all.where('published_at IS NOT NULL')
      search_results = where('published_at IS NOT NULL AND title ILIKE ?', "%#{query}%")

      if query.empty?
        return all_posts
      elsif query
        if !any?
          return nil
        else
          return search_results
        end
      else
        return all_posts
      end
  end
  

  private

  def set_slug
    if self.should_generate_new_slug?
     self.slug = self.title.downcase.gsub(/\s+/, '-')
    else
      return nil
    end
  end

  def published
    post = post.where.not(published_at: nil)
  end

end
