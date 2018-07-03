class Book < ApplicationRecord

  # Fills in the gender and hometown of the author
  def populate_demographics
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    author = client.author(self.author_id)
    self.hometown = author.hometown
    self.gender = author.gender
  end

end
