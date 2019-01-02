module Admin
  class PostsController < DashboardController
    include Rails.application.routes.url_helpers

    before_action :set_post, only: [:edit, :update, :destroy, :toggle_published]

    def new
      @post = Post.new
      @post.build_image
    end

    def create
      @post = Post.create!(post_params)
      if @post.save
        redirect_to admin_posts_path
      else
        render :new
      end
    end

    def index
      @posts = Post.all.order(created_at: :desc)
    end

    def destroy
      @post.destroy
      redirect_to admin_posts_path
    end

    def edit
    end

    def update
      if @post.update_attributes(post_params)
        redirect_to admin_posts_path
      else
        render :edit, status: :unproccessable_entity
      end
    end

    def toggle_published
      @post.toggle_published
      redirect_back(fallback_location: admin_posts_path)
    end

    private

    def set_post
     @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :slug, :content, :image_id, :introduction, :admin_user_id, image_attributes: Image.attribute_names.map(&:to_sym).push(:_destroy, :file))
    end

  end
end
