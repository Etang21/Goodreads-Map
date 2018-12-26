# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Here we seed with potential recommendations from existing lists
require 'goodreads'
require 'awesome_print'

Goodreads.configure(
     api_key: "msEIA0FG34FG9peoBVH5g",
     api_secret: "a46rPARjz42Umqr36N2o0S72tdvPlKDlVFKD2FTYl8"
 )

client = Goodreads.new()
shelf = client.shelf(1095613, 'india')

shelf.books.each do |item|

  book_info = client.book(item.book.id)
  book = Book.find_or_create_by title: book_info.title, goodid: book_info.id
  if book_info.authors.author.is_a?(Array) then
    book.author = book_info.authors.author[0].name
    book.author_id = book_info.authors.author[0].id
  else
    book.author = book_info.authors.author.name
    book.author_id = book_info.authors.author.id
  end

  author = Author.new name: book.author, id: book.author_id
  author_api_url = 'http://localhost:3000/api/v1/authors.json?author_name=' + (book.author || "nil")
  response = HTTParty.get(author_api_url).to_json
  authorHash = JSON.parse(response)
  book.update_attributes({nationality: authorHash["nationality"], gender: authorHash["gender"]})
  book.save
  puts (book.title || "nil") + ", by " + (book.author || "nil") + " - " + (book.nationality || "nil") + " - " + (book.gender || "nil")

  book_info.popular_shelves.shelf.each do |s|
    genre = Genre.find_or_create_by(name: s.name)
    if not genre.books.include? book then
      genre.books << book
    end
    genre.save
  end

end
