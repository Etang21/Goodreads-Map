class Main extends React.Component {

  constructor(props) {
    super(props);
    console.log("Props to Main:", props)
    this.state = {
      userID: '',
      shelf: null,
      page: 'login'
    }
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginChange(event) {
    this.setState({userID: event.target.value})
  }

  handleLoginSubmit(event) {
    this.setState({page: 'body'})
    console.log(this.state)
    event.preventDefault()
  }

  render() {
    if (this.state.page == 'login') {
      return (
        <Login userID={this.state.userID} handleSubmit={this.handleLoginSubmit} handleChange={this.handleLoginChange}/>
      )
    }
    return (
      <div>
        <p>We are on body page</p>
      </div>
    )
  }

}
