import React from 'react'
import styled from "styled-components";
import Message from './Message'
import autoscroll from 'autoscroll-react'

const ScrollableArea = styled.div`
  overflow-y: auto;
`

class MessagesList extends React.Component {
  render () {
    return (
      <ScrollableArea {...this.props}>
        {this.props.messages.map((message, index) => (
          <Message key={index} message={message} me={message.sender === this.props.userId} />
        ))}
      </ScrollableArea>
    )
  }
}

export default autoscroll(MessagesList)