import React, { Component } from 'react';
import uuid from 'uuid'

import MessagesList from './components/MessagesList'
import MessageInput from './components/MessageInput'
import Container from './components/Container'

import { getAvatarURL, setAvatarURL, getUUID, setUUID, getUsername, setUsername } from './lib/storage';
import { logos } from './lib/logos'
import { getStream } from './lib/stream';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false,
      messages: []
    }
    this.stream = getStream()

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async _prepareAvatar(){
    let avatarURL = await getAvatarURL()
    if (!avatarURL) {
      avatarURL = await setAvatarURL(logos[Math.floor(Math.random() * 5)])
    }

    return avatarURL
  }
  async _prepareUUID(){
    let userId = await getUUID()
    if (!userId) {
      userId = await setUUID(uuid())
    }

    return userId
  }
  componentDidMount() {
    this.stream.once('connect', async () => {
      const avatarURL = await this._prepareAvatar()
      const userId = await this._prepareUUID()
      const username = await getUsername()

      this.stream.on('spotim/chat', (data) => {
        console.log(data)
        this.setState({
          messages: [...this.state.messages, data]
        })
      })

      this.setState({
        avatarURL,
        userId,
        username,
        ready: true
      })
    })
  }
  handleSubmit({
    name,
    message,
    avatarURL
  }) {
    setUsername(name)
    this.setState({
      username: name
    })
    this.stream.emit('spotim/chat', {
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
