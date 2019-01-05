class AdminUserSerializer < ActiveModel::Serializer
  attributes :id

  has_one :image

end
