json.posts do
  json.array!(@posts) do |post|
    json.title post.title
    json.introduction post.introduction
afdafg  end
end