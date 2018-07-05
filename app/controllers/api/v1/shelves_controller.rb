class Api::V1::ShelvesController < ApplicationController

  # Get shelf of user's books. Eric's ID: 79913579
  def index
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    shelf = client.shelf(params[:user_id], "read")
    @user_shelf = shelf.books.map do |result|
      Book.new(title: result.book.title, goodid: result.book.id, author: result.book.authors.author.name, author_id: result.book.authors.author.id)
    end
    render json: @user_shelf
  end

  # Currently no Create, Update, Delete functionality, since we don't store
  # anything in the database. Could be changed later.

  private

  def shelf_params
    params.require(:shelf).permit(:id, :user_id)
  end

end
