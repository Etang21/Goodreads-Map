import React from 'react'
import BookTable from './BookTable'
import DemographicsChart from './DemographicsChart'

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shelf: [],
      shelfLoading: true,
      userName: null
    };
  }

  componentDidMount() {
    //Fetch shelf, update all demographic data:
    fetch('api/v1/shelves.json?user_id=' + this.props.user_id)
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({shelf: data})
        this.setState({shelfLoading: false})
        this.updateDemographicData()
    });
    //Fetch user name and info:
    fetch('api/v1/user.json?user_id=' + this.props.user_id)
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({userName: data['name']})
    });
  }

  // For all the books in our state's shelf, fetch and update the demographic data
  updateDemographicData() {
    this.state.shelf.forEach( (bk) => {
      fetch('api/v1/authors.json?author_name=' + bk.author)
        .then((response) => { return response.json() })
        .then((data) => {
          data['author_id'] = bk.author_id
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
      book.nationality = author.nationality
    }
    return book
  }

  // Map of demographic categories to # occurrences in shelf for given key
  // e.g. Key can be "gender" or "nationality"
  demographicsForKey(key) {
    var demographics = new Map()
    var shelf = this.state.shelf
    for (var i = 0; i < shelf.length; i++) {
      var category = shelf[i][key] || "unknown"
      if (!demographics.has(category)) {
        demographics.set(category, 0)
      }
      demographics.set(category, demographics.get(category) + 1)
    }
    return demographics
  }


  render() {
    const genders = this.demographicsForKey("gender")
    const countries = this.demographicsForKey("nationality")
    const welcomeText = "Your Shelf"
    return (
      <div>
        <div class="page-header" vertical-align="middle">
          <h1>{welcomeText}</h1>
        </div>
        <DemographicsChart dataMap={genders} title={"Gender"}></DemographicsChart>
        <DemographicsChart dataMap={countries} title = {"Country"}></DemographicsChart>
        <BookTable shelf={this.state.shelf} shelfLoading={this.state.shelfLoading} />
      </div>
    )
  }
}

export default Body;
