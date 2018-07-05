class UserController < ApplicationController

  # Get shelf of user's books. Eventually could use API endpoint for this.
  def index
    @user_id = 79913579 # Eric's ID: 79913579
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    shelf = client.shelf(@user_id, "read")
    @user_shelf = shelf.books.map do |result|
      Book.new(title: result.book.title, goodid: result.book.id, author: result.book.authors.author.name, author_id: result.book.authors.author.id)
    end
  end

end
