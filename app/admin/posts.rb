ActiveAdmin.register Post do
  permit_params :title, :content, :published_at, :slug, :image

  form do |f|
    f.inputs 'Article' do
      f.input :title
      f.input :content, as: :quill_editor
      f.input :image, as: :file
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
    redirect_to admin_post_path(post)
  end

  member_action :unpublish, method: :put do
    post = Post.find(params[:id])
    post.update(published_at: nil)
    redirect_to admin_post_path(post)
  end




end