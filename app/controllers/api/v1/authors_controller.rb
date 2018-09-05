class Api::V1::AuthorsController < ApplicationController

  def index
    @author = Author.new(name: params[:author_name])
    libThingKey = 'd231aa37c9b4f5d304a60a3d0ad1dad4'
    libThingURL = 'http://www.librarything.com/services/rest/1.1/'
    libThingURL += '?method=librarything.ck.getauthor'
    libThingURL += '&apikey=' + libThingKey
    encoding_options = {
      :invalid           => :replace,  # Replace invalid byte sequences
      :undef             => :replace,  # Replace anything not defined in ASCII
      :replace           => '',        # Use a blank for those replacements
      :universal_newline => true       # Always break lines with \n
    }
    authorName = params[:author_name].encode(Encoding.find('ASCII'), encoding_options)
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
