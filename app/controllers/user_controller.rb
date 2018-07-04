# You're writing this whole controller from scratch here goes...
# Along with the views and routes
# This will be the homepage where users views all their books and such

class UserController < ApplicationController

  def index
    # Get books from the appropriate ID
    # Could pass this logic off to the model
    user_id = 79913579
    # Eric's ID: 79913579
    # Nice test ID with 12 books: 29077983
    @user_id = user_id
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    shelf = client.shelf(@user_id, "read")
    puts "Books read: #{shelf.total}"
    @user_shelf = shelf.books.map do |result|
      bk = Book.new(title: result.book.title, goodid: result.book.id, author: result.book.authors.author.name, author_id: result.book.authors.author.id)
      # bk.populate_demographics
      # Above is commented out to speed loading time while testing
      bk
    end
    # The following code loads all the authors and such. Takes a while:
    # shelf.books.each do |result|
    #   title = result.book.title
    #   author = client.author(result.book.authors.author.id)
    #   puts "\"#{title}\", by #{author.name}, Hometown: #{author.hometown}, Gender: #{author.gender}"
    # end
  end

end
