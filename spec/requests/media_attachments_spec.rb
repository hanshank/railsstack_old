require 'rails_helper'

RSpec.describe "MediaAttachments", type: :request do
  describe "GET /media_attachments" do
    it "works! (now write some real specs)" do
      get media_attachments_path
      expect(response).to have_http_status(200)
    end
  end
end
