get '/' do
  @coaches = Coach.all
  erb :index
end

post '/create' do
  Coach.add(params[:name])
  redirect '/'
end