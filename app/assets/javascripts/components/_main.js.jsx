class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      page: 'login'
    }
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginChange(event) {
    this.setState({user_id: event.target.value})
  }

  handleLoginSubmit(event) {
    this.setState({page: 'body'})
    event.preventDefault()
  }

  render() {
    if (this.state.page == 'login') {
      return (
        <Login user_id={this.state.user_id} handleSubmit={this.handleLoginSubmit} handleChange={this.handleLoginChange}/>
      )
    }
    if (this.state.page == 'body') {
      return (
        <Body user_id={this.state.user_id} />
      )
    }
    return (
      <div>
        <p>Error. Not on an actual page.</p>
      </div>
    );
  }

}
