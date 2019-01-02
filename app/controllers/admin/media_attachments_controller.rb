
module Admin
  class MediaAttachmentsController < ApplicationController
    before_action :set_media_attachment, only: [:show, :update, :destroy]

    # GET /media_attachments
    def index
      @media_attachments = MediaAttachment.all

      render json: @media_attachments
    end

    # GET /media_attachments/1
    def show
      render json: @media_attachment
    end

    # POST /media_attachments
    def create
      @media_attachment = MediaAttachment.new(media_attachment_params)

      if @media_attachment.save
        render json: @media_attachment, status: :created, location: @media_attachment
      else
        render json: @media_attachment.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /media_attachments/1
    def update
      if @media_attachment.update(media_attachment_params)
        render json: @media_attachment
      else
        render json: @media_attachment.errors, status: :unprocessable_entity
      end
    end

    # DELETE /media_attachments/1
    def destroy
      @media_attachment.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_media_attachment
        @media_attachment = MediaAttachment.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def media_attachment_params
        params.fetch(:media_attachment, {})
      end
  end
end
