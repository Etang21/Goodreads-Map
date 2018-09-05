class Api::V1::AuthorsController < ApplicationController
  include LibThingHelper
  include NameFormatHelper

  def index
    @author = Author.new(name: params[:author_name])
    libThingURL = lib_thing_url # LibThingHelper
    libThingURL += '&method=librarything.ck.getauthor'
    libThingURL += '&name=' + libthing_author_name(params[:author_name]) # NameFormatHelper
    response = HTTParty.get(libThingURL).to_json
    authorHash = JSON.parse(response)
    populate_demographics(@author, authorHash)
    render json: @author
  end

  # Currently no Create, Update, Delete functionality, since we don't store
  # anything in the database. Could be changed later.

  private

  def author_params
    params.require(:author).permit(:id, :author_id, :name, :hometown, :gender)
  end

  def populate_demographics(author, authorHash)
    begin
      authorFacts = authorHash["response"]["ltml"]["item"]["commonknowledge"]["fieldList"]["field"]
      nationalityFacts = authorFacts.select { |fact| fact["name"] == "nationality"}
      if nationalityFacts.length > 0
        author.hometown = nationalityFacts[0]["versionList"]["version"]["factList"]["fact"]
      end
      genderFacts = authorFacts.select { |fact| fact["name"] == "gender"}
      if genderFacts.length > 0
        author.gender = genderFacts[0]["versionList"]["version"]["factList"]["fact"]
      end
    rescue StandardError => err
      puts err
    end
    return author
  end



end
