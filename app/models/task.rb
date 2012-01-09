class Task
  include Mongoid::Document
  field :state, :type => String
  field :author, :type => String
  field :body, :type => String

  belongs_to :story
end
