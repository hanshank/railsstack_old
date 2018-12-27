ActiveAdmin.register Post do
  permit_params :title, :introduction, :content, :published_at, :published_date, :slug, :imageable_id, :user_id, image_attributes: [ :id, :url, :alt_attribute, :_destroy, :image_id ]

  form do |f|
    f.inputs 'Post' do    
      f.input :title
      f.input :introduction
      f.input :content, as: :quill_editor
      f.input :user

      f.has_many :image do |s|
        s.input :file, :as => :file
        s.input :alt_attribute
        s.input :url
      end

    end
    f.actions
  end

  action_item :publish, only: :show do
    link_to "Publish", publish_admin_post_path(post), method: :put if !post.published_at
  end

  action_item :unpublish, only: :show do
    link_to "Unpublish", unpublish_admin_post_path(post), method: :put if post.published_at
  end

  member_action :publish, method: :put do
    post = Post.find(params[:id])
    post.update(published_at: Time.zone.now)
    post.update(published_date: Time.zone.now.strftime("%h %d, %y").to_s)
    redirect_to admin_post_path(post)
  end

  member_action :unpublish, method: :put do
    post = Post.find(params[:id])
    post.update(published_at: nil)
    post.update(published_date: nil)
    redirect_to admin_post_path(post)
  end




end
