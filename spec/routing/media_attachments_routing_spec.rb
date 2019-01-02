require "rails_helper"

RSpec.describe MediaAttachmentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/media_attachments").to route_to("media_attachments#index")
    end

    it "routes to #show" do
      expect(:get => "/media_attachments/1").to route_to("media_attachments#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/media_attachments").to route_to("media_attachments#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/media_attachments/1").to route_to("media_attachments#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/media_attachments/1").to route_to("media_attachments#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/media_attachments/1").to route_to("media_attachments#destroy", :id => "1")
    end
  end
end
