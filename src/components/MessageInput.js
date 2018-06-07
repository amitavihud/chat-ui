import React from 'react'
import styled, { css } from "styled-components";
import logo from './assets/002-psyduck.png'
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
`

export default class MessageInput extends React.Component {
  render() {
    return (
      <Container>
        <NameInputContainer>
          <img className="avatar" src={logo} />
          <Input placeholder="Your name" value="Amit Avihud" />
        </NameInputContainer>
        <Message placeholder="Message" />
        <SendContainer>
          <Send>Send</Send>
        </SendContainer>        
      </Container>
    )
  }
}