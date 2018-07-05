class Body extends React.Component {

  constructor(props) {
    super(props);
    console.log("Props to Body:", props)
    this.state = {
      user_id: props.user_id,
      shelf: []
    }
  }

  componentDidMount() {
    //Fetch shelf, update all demographic data:
    fetch('api/v1/shelves.json?user_id=' + this.state.user_id)
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({shelf: data})
        console.log("State after fetching shelf:", this.state)
        this.updateDemographicData()
      })
  }

  // For all the books in our state's shelf, fetch and update the demographic data
  updateDemographicData() {
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
    console.log("We're in render and the state is ", this.state)
    return (
      <div>
        <h1>Welcome, user {this.state.user_id}!</h1>
        <BookTable shelf={this.state.shelf} />
      </div>
    )
  }

}
