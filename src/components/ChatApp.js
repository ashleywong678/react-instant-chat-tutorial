require('../styles/ChatApp.css');

import React from 'react';
import io from 'socket.io-client';
import config from '../config';

import Messages from './Messages';
import ChatInput from './ChatInput';

// This is where the main logic of the app will be. Here is where we will
// communicate with the chat server (send and receive messages). We will
// then pass the data received from the server to other components to be
// displayed
class ChatApp extends React.Component {
  render() {
    return(
    <div className='container'>
      <h3>React Chat App</h3>
      <Messages messages={this.state.messages} />
      <ChatInput onSend={this.handleSend} />
    </div>
    )
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
