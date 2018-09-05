class Api::V1::AuthorsController < ApplicationController
  include LibThingHelper
  include NameFormatHelper

  def index
    @author = Author.new(name: params[:author_name])
    libThingURL = lib_thing_url # from LibThingHelper
    libThingURL += '&method=librarything.ck.getauthor'
    authorName = convert_ascii(params[:author_name])
    authorNames = authorName.split(" ")
    formattedAuthorName = authorNames[-1] + ", " + authorNames[0...-1].join(" ")
    libThingURL += '&name=' + formattedAuthorName
    response = HTTParty.get(libThingURL).to_json
    authorHash = JSON.parse(response)
    begin
      authorFacts = authorHash["response"]["ltml"]["item"]["commonknowledge"]["fieldList"]["field"]
      nationalityFact = authorFacts.select { |fact| fact["name"] == "nationality"} [0]
      nationality = nationalityFact["versionList"]["version"]["factList"]["fact"]
      genderFact = authorFacts.select { |fact| fact["name"] == "gender"} [0]
      gender = genderFact["versionList"]["version"]["factList"]["fact"]
      @author.hometown = nationality
      @author.gender = gender
    rescue StandardError => err
      puts err
    end
    render json: @author
  end

  # Currently no Create, Update, Delete functionality, since we don't store
  # anything in the database. Could be changed later.

  private

  def author_params
    params.require(:author).permit(:id, :author_id, :name, :hometown, :gender)
  end



end
