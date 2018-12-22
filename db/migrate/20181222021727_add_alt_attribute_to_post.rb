class AddAltAttributeToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :image_alt_attribute, :string
  end
end
