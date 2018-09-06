module ::NameFormatHelper
  extend ActiveSupport::Concern

  included do
  end

  def libthing_author_name(name)
    # Given a name, formats it properly for the library thing getauthor API
    name = convert_ascii(name)
    authorNames = name.split(" ")
    return authorNames[-1] + ", " + authorNames[0...-1].join(" ")
  end

  def convert_ascii(str)
    # Given a string, converts it to ASCII
    encoding_options = {
      :invalid           => :replace,  # Replace invalid byte sequences
      :undef             => :replace,  # Replace anything not defined in ASCII
      :replace           => '',        # Use a blank for those replacements
      :universal_newline => true       # Always break lines with \n
    }
    authorName = str.encode(Encoding.find('ASCII'), encoding_options)
  end



end
