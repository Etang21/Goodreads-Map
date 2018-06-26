Goodreads.configure(
    api_key: "msEIA0FG34FG9peoBVH5g",
    api_secret: "a46rPARjz42Umqr36N2o0S72tdvPlKDlVFKD2FTYl8"
)

def search_title(title, num_results = 3)
  client = Goodreads.new()
  search = client.search_books(title)
  search.results.work[0..num_results].each do |book|
    title = book.best_book.title
    author = client.author(book.best_book.author.id)
    puts book
    puts "\"#{title}\", by #{author.name}, Hometown: #{author.hometown}, Gender: #{author.gender}"
  end
  nil
end

def book_for_id(id)
  client = Goodreads.new()
  result = client.book(id)
  title = result.title
  author_id = nil
  # Goodreads appears to store these slightly differently lol
  if result.authors.author.instance_of? Array
    author_id = result.authors.author[0].id
  else
    author_id = result.authors.author.id
  end
  author = client.author(author_id)
  puts "\"#{title}\", by #{author.name}, Hometown: #{author.hometown}, Gender: #{author.gender}"
end

def books_read_by_user(user_id)
  client = Goodreads.new()
  shelf = client.shelf(user_id, "read")
  puts "Books read: #{shelf.total}"
  shelf.books.each do |result|
    title = result.book.title
    author = client.author(result.book.authors.author.id)
    puts "\"#{title}\", by #{author.name}, Hometown: #{author.hometown}, Gender: #{author.gender}"
  end
  nil
end
