module Api::V1::Blog
  class PostsController < ApiController
    before_action :set_post, only: [:show, :edit, :update, :destroy]
    include Rails.application.routes.url_helpers


    def new
      @post = Post.new
    end

    def create
      @post = Post.create!(post_params)
      json_response(@post, :created)
    end

    def show
      @post.published_at = @post.published_at.strftime("%h")
      render json: @post, include: :user
    end

    def index
      @posts = Post.all.where.not(published_at: nil).order(published_at: :desc)
      render json: @posts, include: :image, methods: :image_url
    end

    private

    def set_post
     @post = Post.find_by(slug: params[:slug])
    end

    def post_params
      params.require(:post).permit(:title, :content, :image, :user_id)
    end

  end
end
