module Api::V1::Blog
  class PostsController < ApiController
    include Rails.application.routes.url_helpers

    before_action :set_post, only: [:show, :edit, :update, :destroy]


    def new
      @post = Post.new
    end

    def create
      @post = Post.create!(post_params)
      json_response(@post, :created)
    end

    def show
      @post.published_at = @post.published_at.strftime("%h")
      render json: @post, include: {:image, user: {include: {:image}}}
    end

    def index
      @posts = Post.all.where.not(published_at: nil).order(published_at: :desc)
      render json: @posts, include: :image
    end

    private

    def set_post
     @post = Post.find_by(slug: params[:slug])
    end

    def post_params
      params.require(:post).permit(:title, :content, :image_id, :user_id, image_attributes: [:url, :position, :alt_attribute])
    end

  end
end
