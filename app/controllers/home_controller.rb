class HomeController < ApplicationController

  def index
    if !(session[:token] && session[:token_secret] && params["authorize"]) # Try authorizing
      consumer = get_oauth_consumer
      request_token = consumer.get_request_token
      session[:token] = request_token.token
      session[:token_secret] = request_token.secret
      current_url = request.original_url
      redirect_to(request_token.authorize_url + "&oauth_callback=#{current_url}")

    elsif params["authorize"] == "1" # User authorized
      request_hash = { oauth_token: session[:token], oauth_token_secret: session[:token_secret]}
      consumer = get_oauth_consumer
      request_token  = OAuth::RequestToken.from_hash(consumer, request_hash)
      access_token = request_token.get_access_token
      client = Goodreads.new(oauth_token: access_token)
      @user_id = client.user_id

    elsif params["authorize"] == "0" # User declined to authorize
      Rails.logger.debug("User has declined to authenticate")
      @user_id = ""
    end
    
    @authorize = params["authorize"]
  end

end
