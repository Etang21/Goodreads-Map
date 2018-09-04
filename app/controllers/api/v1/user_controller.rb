class Api::V1::UserController < ApplicationController

  # Get user information given ID
  def index
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    user = client.user(params[:user_id])
    render json: user
  end

  # Currently no Create, Update, Delete functionality, since we don't store
  # anything in the database. Could be changed later.

end
