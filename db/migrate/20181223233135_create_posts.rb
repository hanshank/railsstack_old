class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :introduction
      t.text :content
      t.string :slug
      t.datetime :published_at
      t.string :published_date
      t.string :image_url
      t.string :image_alt_attribute
      t.references :user, foreign_key: true
      
      t.timestamps
    end
  end
end
