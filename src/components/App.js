require('../styles/App.css');
require('../styles/Login.css');

import React from 'react';
import ChatApp from './ChatApp';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '' }

  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitted: true, username: this.state.username})
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} />
      );
    }

    // Initial page load, show a simple login form
    return(
      <form onSubmit={this.handleSubmit} className='username-container'>
        <h1>React Instant Chat</h1>
        <div>
          <input type='text' onChange={this.handleChange} placeholder="Enter username..." required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}
App.defaultProps = {
};

export default App;
