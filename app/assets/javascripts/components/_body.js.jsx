
class Body extends React.Component {

  constructor(props) {
    super(props);
    console.log("Props to Body:", props)
    this.state = {
      shelf: props.shelf,
      user_id: props.user_id
    }
  }

  componentDidMount() {
    // Go through and clean this code up afterwards!
    this.state.shelf.forEach( (bk) => {
      fetch('api/v1/authors.json?author_id=' + bk.author_id)
        .then((response) => { return response.json() })
        .then((data) => {
          var newShelf = this.updatedShelf(this.state.shelf, data)
          this.setState({shelf: newShelf})
        })
    })
  }

  // Updates all books in a shelf for given author information
  updatedShelf(shelf, author) {
    return shelf.map( (elem) => {
      return this.bookFromAuthorData(elem, author)
    })
  }

  // Given a book and author, will update book's demographic info if match
  bookFromAuthorData(book, author) {
    if (book.author_id == author.author_id) {
      book.gender = author.gender
      book.hometown = author.hometown
    }
    return book
  }

  render() {
    return (
      <div>
        <h1>Welcome, user {this.state.user_id}!</h1>
        <BookTable shelf={this.state.shelf}/>
      </div>
    )
  }

}
