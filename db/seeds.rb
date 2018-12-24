AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

User.create(name: "Hans Martin Hanken", email: "hansmhank@gmail.com", id: 1)

Post.create(title: 'My vey first post', introduction: "A very short introduction that is on point. It will catch the readers attention.", content: 'Lorem ipsos is the stuff', user_id: 1)


