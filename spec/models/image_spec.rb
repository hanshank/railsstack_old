require 'rails_helper'

RSpec.describe Image, type: :model do  
    let!(:image) { Image.new(url: "hello/url", alt_attribute: "something") }
    let!(:post) { Post.new }  

    describe "Validations" do

        it "is valid with valid attributes" do
            expect(image).to be_valid
        end

        it "is not valid without an url" do 
            expect(image).to validate_presence_of(:url)
        end

        it "is not valid without an alt attribute" do
            expect(image).to validate_presence_of(:alt_attribute)
        end  
    end
end