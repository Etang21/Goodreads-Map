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

puts Genre.first

client = Goodreads.new()

shelf = client.shelf(1095613, 'india')
shelf.books.each do |item|
  puts item.book.id
  book_info = client.book(item.book.id)
  ap book_info
  book = Book.find_or_create_by title: book_info.title, goodid: book_info.id
  if book_info.authors.author.is_a?(Array) then
    book.author = book_info.authors.author[0].name
    book.author_id = book_info.authors.author[0].id
  else
    book.author = book_info.authors.author.name
    book.author_id = book_info.authors.author.id
  end
  book.save
  book_info.popular_shelves.shelf.each do |s|
    genre = Genre.find_or_create_by(name: s.name)
    genre.books << book
  end
end
