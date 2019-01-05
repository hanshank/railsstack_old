class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :introduction, :content, :published_at, :published_date, :slug

  belongs_to :admin_user
  has_one :image

end
