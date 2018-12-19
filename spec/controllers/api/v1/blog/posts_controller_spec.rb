require 'rails_helper'

RSpec.describe Api::V1::PostsController do
    let!

    describe '#create' do 
     subject  { get :create }
    
        it 'creates a post' do
        end
    end

    describe '#index' do 
        subject  { get :index }

        let!(:post1) { create :post, title: 'First blog post' }
        let!(:post2) { create :post, title: 'Second blog post' }

        it 'returns http success' do
            expect(response).to have_http_status(:success)
        end

        it 'renders a JSON list of articles' do
            expect(JSON.parse(subject.body).length).to eq(2)
            expect(JSON.parse(subject.body)[0]['title']).to eq('First Article')
            expect(JSON.parse(subject.body)[1]['title']).to eq('Second Article')
          end

    end


end