import React from 'react'
import BookTable from './BookTable'
import GenderDemographicsChart from './GenderDemographicsChart'

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
          console.log(data)
          data['author_id'] = bk.author_id
          console.log(data)
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

  // Calculates gender percentages from the current shelf as dictionary
  genderDemographics() {
    var genders = new Map()
    var shelf = this.state.shelf
    for (var i = 0; i < shelf.length; i++) {
      var gender = shelf[i]["gender"] || "unknown"
      if (!genders.has(gender)) {
        genders.set(gender, 0)
      }
      genders.set(gender, genders.get(gender) + 1)
    }
    return genders
  }


  render() {
    var genders = this.genderDemographics()
    var welcomeText = "Welcome!"
    if (this.state.userName != null) {
      welcomeText = this.state.userName + "'s Shelf:"
    }
    return (
      <div>
        <h1>{welcomeText}</h1>
        <GenderDemographicsChart genders={genders}></GenderDemographicsChart>
        <BookTable shelf={this.state.shelf} shelfLoading={this.state.shelfLoading} />
      </div>
    )
  }
}

export default Body;
