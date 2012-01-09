require "spec_helper"

describe TasksController do

  context "POST create" do

    context "when successful" do

      before do
        @post_params = {
          :locale => "pt-BR",
          :format => "json"
        }
      end

      it "creates a blank task" do
        expect {
          post :create, @post_params
        }.should change(Task, :count).by(1)
      end

      it "returns a well-formed json" do
        post :create, @post_params
        response.body.should == {
          :_id => assigns[:task].id,
          :author => nil,
          :body => nil,
          :state => nil,
          :story_id => nil }.to_json
      end

    end

  end

end