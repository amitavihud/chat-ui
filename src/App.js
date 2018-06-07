import React, { Component } from 'react';
import styled from 'styled-components'

import MessagesList from './components/MessagesList'
import MessageInput from './components/MessageInput'
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <Container>
        <MessagesList>ChatUI</MessagesList>
        <MessageInput />
      </Container>
    );
  }
}

export default App;
