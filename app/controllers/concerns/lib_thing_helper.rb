module LibThingHelper
  extend ActiveSupport::Concern

  included do
  end

  def lib_thing_url
    libThingKey = 'd231aa37c9b4f5d304a60a3d0ad1dad4'
    libThingURL = 'http://www.librarything.com/services/rest/1.1/'
    libThingURL += '?apikey=' + libThingKey
    return libThingURL
  end

end
