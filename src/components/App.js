require('../styles/App.css');
require('../styles/Login.css');

import React from 'react';
import ChatApp from './ChatApp';

// This is the first screen seen by the user. We should display some way for
// them to enter their name and enter the chat room
class App extends React.Component {


  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitted: true, username: this.state.username})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='username-container'>
        <h1>React Instant Chat</h1>
        <div>
          <input type='text' onChange={this.handleChange} placeholder="Enter username..." required />
        </div>
      </form>
    )
  }

}
App.defaultProps = {
};

export default App;
