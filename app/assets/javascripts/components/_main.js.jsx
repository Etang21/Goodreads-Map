class Main extends React.Component {

  constructor(props) {
    super(props);
    console.log("Props to Main:", props)
    this.state = {
      user_id: null,
      shelf: null,
      page: 'login'
    }
  }

  render() {
    return (
      <div>
        <p>Testing the Main Page</p>
      </div>
    )
  }

}
