# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# guard 'coffeescript', :input => 'app/assets/javascripts'
guard 'coffeescript', :output => 'public/javascripts/compiled' do
  watch(/^app\/assets\/javascripts\/**\/(.*).coffee/)
end

guard 'coffeescript', :output => 'spec/javascripts/compiled' do
  watch(/^spec\/javascripts\/(.*).coffee/)
end
