module Api::V1::Blog
  class PostsController < ApiController
    before_action :set_post, only: [:show, :edit, :update, :destroy]

    def new
      @post = Post.new
    end

    def create
      byebug
      @post = Post.create!(post_params)
      json_response(@post, :created)
    end

    def old_create
      @post = Post.create!(post_params)
      json_response(@post, :created)
    end

    def show
      render json: @post
    end

    def index
      @posts = Post.all
      render json: @posts
    end

    private

    def set_post
     @post = Post.find_by(slug: params[:slug])
    end

    def post_params
      params.require(:post).permit(:title, :content, :image)
    end

  end
end
