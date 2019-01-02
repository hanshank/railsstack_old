class CreateMediaAttachments < ActiveRecord::Migration[5.2]
  def change
    create_table :media_attachments do |t|
      t.text :attachment_data
      t.timestamps
    end
  end
end
