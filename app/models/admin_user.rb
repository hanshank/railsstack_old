class AdminUser < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :posts, dependent: :destroy
  has_one :image, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :image

  def profile
    super || build_image
  end

  def as_json(options = {})
    super.as_json(options).merge(image: {url: image_url}, admin_user: {image: {url: admin_user}})
  end

  def image_url
    super
  end

end
