import React from 'react'
import styled from "styled-components";
import Message from './Message'

const ScrollableArea = styled.div`
  overflow-y: auto;
`

export default class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [
        "Lorem ipsum dolor sit amet", 
        "consectetur adipiscing elit,\n sed do eiusmod tempor incididunt ut labore et dolore", 
        "magna aliqua.\n Ut enim ad minim veniam,\n quis\n nostrud\n exercitation",
        "ullamco laboris\n nisi ut\n aliquip\n ex\n ea\n commodo\n consequat."
      ]
    }
  }
  render () {
    return (
      <ScrollableArea>
        {this.state.messages.map(message => (
          <Message>{message}</Message>
        ))}
      </ScrollableArea>
    )
  }
}