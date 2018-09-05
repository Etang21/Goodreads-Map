module NameFormatHelper
  extend ActiveSupport::Concern

  included do
  end

  def convert_ascii(str)
    encoding_options = {
      :invalid           => :replace,  # Replace invalid byte sequences
      :undef             => :replace,  # Replace anything not defined in ASCII
      :replace           => '',        # Use a blank for those replacements
      :universal_newline => true       # Always break lines with \n
    }
    authorName = str.encode(Encoding.find('ASCII'), encoding_options)
  end

  

end
