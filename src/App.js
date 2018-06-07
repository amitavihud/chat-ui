import React, { Component } from 'react';
import uuid from 'uuid'

import MessagesList from './components/MessagesList'
import MessageInput from './components/MessageInput'
import Container from './components/Container'

import { getAvatarURL, setAvatarURL, getUUID, setUUID, getUsername, setUsername } from './lib/storage';
import { logos } from './lib/logos'
import { connect, submitMessage, CHAT_TOPIC } from './lib/socket';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false,
      messages: [],
      avatarURL: getAvatarURL() || setAvatarURL(logos[Math.floor(Math.random() * 5)]),
      userId: getUUID() || setUUID(uuid()),
      username: getUsername()
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    connect((on) => {
      this.setState({
        ready: true
      })

      on(CHAT_TOPIC, data => {
        this.setState({
          messages: [...this.state.messages, data]
        })
      })
    })
  }
  handleSubmit({ name, message, avatarURL }) {
    setUsername(name)
    this.setState({
      username: name
    })
    submitMessage({
      avatar: avatarURL,
      username: name,
      text: message,
      sender: this.state.userId
    })
  }
  render() {
    if (!this.state.ready) {
      return (
        <div>Please wait while we're loading</div>
      )
    }

    return (
      <Container>
        <MessagesList messages={this.state.messages} userId={this.state.userId}>ChatUI</MessagesList>
        <MessageInput username={this.state.username} avatarURL={this.state.avatarURL} onSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

export default App;
