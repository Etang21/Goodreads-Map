# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Here we seed with potential recommendations from existing lists
require 'goodreads'

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
  puts book_info.popular_shelves
  book_info.popular_shelves.shelf.each do |s|
    puts s
    Genre.create(name: s.name)
  end
end
