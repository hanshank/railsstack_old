class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :name
      t.string :alt_attribute
      t.integer :position 
      t.references :imageable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
