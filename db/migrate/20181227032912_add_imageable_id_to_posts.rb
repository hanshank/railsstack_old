class AddImageableIdToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :imageable_id, :integer
  end
end
