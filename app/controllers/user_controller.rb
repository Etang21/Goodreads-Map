# You're writing this whole controller from scratch here goes...
# Along with the views and routes
# This will be the homepage where users views all their books and such

class UserController < ApplicationController

  def index
    #Here we would fill in the code to get books
    user_id = 79913579 #TODO: CURRENTLY HARDCODED TO ERIC'S ID
    @user_id = user_id
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    shelf = client.shelf(@user_id, "read")
    @user_shelf = shelf
    puts "Books read: #{shelf.total}"
    shelf.books.each do |result|
      title = result.book.title
      author = client.author(result.book.authors.author.id)
      puts "\"#{title}\", by #{author.name}, Hometown: #{author.hometown}, Gender: #{author.gender}"
    end
  end

end
