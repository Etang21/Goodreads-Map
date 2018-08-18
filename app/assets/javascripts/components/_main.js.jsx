class Main extends React.Component {

  constructor(props) {
    super(props);
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
    if (this.props.authorize == 0) {
      return (
        <Login user_id={this.props.user_id} handleSubmit={this.handleLoginSubmit} handleChange={this.handleLoginChange}/>
      )
    }
    if (this.props.authorize == 1) {
      return (
        <Body user_id={this.props.user_id} />
      )
    }
    return (
      <div>
        <p>Error. Not on an actual page.</p>
      </div>
    );
  }

}
