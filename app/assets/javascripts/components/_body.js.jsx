class Body extends React.Component {

  constructor(props) {
    super(props);
    console.log("Props to Body:", props)
    this.state = {
      shelf: props.shelf,
      user_id: props.user_id
    }
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
