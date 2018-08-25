import React from 'react'
import Body from './Body'
import Login from './Login'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart(event) {
    // TODO: What happens when user presses GO on splash page?
    event.preventDefault()
  }

  render() {
    if (this.props.authorize == 0) {
      return (
        <Login handleSubmit={this.handleStart}/>
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

export default Main;
