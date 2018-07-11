class HomeController < ApplicationController

  # Here we authenticate the user to generate our Goodreads client
  def index
    request_token = OAuth::Consumer.new(
      "msEIA0FG34FG9peoBVH5g",
      "a46rPARjz42Umqr36N2o0S72tdvPlKDlVFKD2FTYl8",
      site: "https://www.goodreads.com"
    ).get_request_token
    if !params.key?("authorize")
      # If no authorization, must authenticate
      current_url = request.original_url
      redirect_to(request_token.authorize_url + "&oauth_callback=#{current_url}")
    end

  end

end
