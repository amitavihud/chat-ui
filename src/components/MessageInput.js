import React from 'react'
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  
  .avatar {
    width: 20px;
    align-self: center;
    justify-self: center;
  }
`
const inputsStyle = css`
  background-color: #F1F1F7;
  color: #858DA8;
  border: none;
  border-radius: 3px;
  outline-color: transparent;
  outline-style: none;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: #c4cadc
  }
`

const Input = styled.input`
  ${inputsStyle}
  padding: 2px 9px;
`
const Message = styled.textarea`
  ${inputsStyle}
  padding: 10px;
  margin-top: 5px;
  resize: none;
`
const NameInputContainer = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
`
const SendContainer = styled.div`
  justify-self: right;
`
const Send = styled.button`
  padding: 8px 15px;
  margin: 10px;
  background-color: #50BC7E;
  color: white;
  border-radius: 5px;
  outline-style: none;

  &:active {
    background-color: #289154;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #a7d9bc;
  }
`

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
  }
  static getDerivedStateFromProps(props, state){
    if (!state.name) {
      return {
        name: props.username
      }
    }
    return null
  }
  handleSubmit() {
    this.props.onSubmit({
      name: this.state.name,
      message: this.state.message,
      avatarURL:this.props.avatarURL
    })
    this.setState({
      message: ''
    })
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    })
  }
  isEmpty() {
    return !this.state.message || !this.state.message.trim()
  }
  render() {
    return (
      <Container>
        <NameInputContainer>
          <img className="avatar" src={this.props.avatarURL} />
          <Input placeholder="Your name" onChange={this.handleNameChange} value={this.state.name} />
        </NameInputContainer>
        <Message placeholder="Message" onChange={this.handleMessageChange} value={this.state.message} />
        <SendContainer>
          <Send onClick={this.isEmpty() ? undefined : this.handleSubmit} disabled={this.isEmpty()}>Send</Send>
        </SendContainer>        
      </Container>
    )
  }
}