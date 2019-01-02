class RemoveImageableIdFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :imageable_id, :integer
  end
end
