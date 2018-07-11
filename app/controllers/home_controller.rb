class HomeController < ApplicationController

  def index
    if !params.key?("authorize") # Try authorizing
      request_token = OAuth::Consumer.new(
        "msEIA0FG34FG9peoBVH5g",
        "a46rPARjz42Umqr36N2o0S72tdvPlKDlVFKD2FTYl8",
        site: "https://www.goodreads.com"
      ).get_request_token
      current_url = request.original_url
      redirect_to(request_token.authorize_url + "&oauth_callback=#{current_url}")
    elsif params["authorize"] == "1" # User authorized
      @client = Goodreads.new(oauth_token: params["oauth_token"])
    elsif params["authorize"] == "0" # User declined to authorize
      Rails.logger.debug("User has declined to authenticate")
    end
  end

end
