class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  # GET /books
  # GET /books.json
  def index
    @books = Book.all
  end

  # GET /books/1
  # GET /books/1.json
  def show
  end

  # GET /books/new
  def new
    @book = Book.new
  end

  # GET /books/1/edit
  def edit
  end

  # POST /books
  # POST /books.json
  def create
    # Here we extract the proper book params from the Goodreads API for goodid
    client = Goodreads::Client.new(api_key: "msEIA0FG34FG9peoBVH5g")
    puts book_params
    gr_book = client.book(book_params[:goodid])
    puts gr_book
    # Goodreads appears to store author sometimes as an array, sometimes not
    author_id = nil
    if gr_book.authors.author.instance_of? Array
      author_id = gr_book.authors.author[0].id
    else
      author_id = gr_book.authors.author.id
    end
    author = client.author(author_id)
    our_params = {
      goodid: book_params[:goodid],
      title: gr_book.title,
      author: author.name,
      hometown: author.hometown,
      gender: author.gender
    }
    puts our_params
    @book = Book.new(our_params)

    respond_to do |format|
      if @book.save
        format.html { redirect_to @book, notice: 'Book was successfully created.' }
        format.json { render :show, status: :created, location: @book }
      else
        format.html { render :new }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    respond_to do |format|
      if @book.update(book_params)
        format.html { redirect_to @book, notice: 'Book was successfully updated.' }
        format.json { render :show, status: :ok, location: @book }
      else
        format.html { render :edit }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # Get HTML of author and hometown
  # DEMOGRAPHICS /books/
  def demographics
    puts params[:author_id]
    @book = Book.new(author_id: params[:author_id])
    @book.populate_demographics
    respond_to do |format|
      format.html { render html:
        "<th>#{@book.gender}</th>
        <th>#{@book.hometown}</th>"
      }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:title, :goodid, :author, :gender, :hometown)
    end
end
