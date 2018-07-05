class Api::V1::AuthorsController < ApplicationController

  def index
    @author = Author.new(author_id: params[:author_id])
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    author = client.author(params[:author_id])
    @author.name = author.name
    @author.hometown = author.hometown
    @author.gender = author.gender
    render json: @author
  end

  # Currently no Create, Update, Delete functionality, since we don't store
  # anything in the database. Could be changed later.

  private

  def author_params
    params.require(:author).permit(:id, :author_id, :name, :hometown, :gender)
  end

end
