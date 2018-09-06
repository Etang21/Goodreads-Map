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
    params.require(:author).permit(:id, :author_id, :name, :nationality, :gender)
  end

  def populate_demographics(author, authorHash)
    # Given an author and LibraryThing hash of their info, updates author's
    # Gender and nationality, returns author
    begin
      authorFacts = authorHash["response"]["ltml"]["item"]["commonknowledge"]["fieldList"]["field"]
      nationalityFacts = authorFacts.select { |fact| fact["name"] == "nationality"}
      if nationalityFacts.length > 0
        nationality = nationalityFacts[0]["versionList"]["version"]["factList"]["fact"]
        author.nationality = format_libthing_nationality(nationality)
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

  def format_libthing_nationality(nationality)
    # Given nationality in LibraryThing nationality format, returns just a country
    if nationality.respond_to? :each
      # Then it's a list of nationalities
      nationality = nationality[0]
    end
    extra_word = " (birth)"
    nationality.slice! extra_word
    return nationality
  end


end
