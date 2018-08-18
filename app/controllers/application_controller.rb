class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  helper_method :get_oauth_consumer

  def get_oauth_consumer
    return OAuth::Consumer.new(
      "msEIA0FG34FG9peoBVH5g",
      "a46rPARjz42Umqr36N2o0S72tdvPlKDlVFKD2FTYl8",
      site: "https://www.goodreads.com"
    )
  end

end
