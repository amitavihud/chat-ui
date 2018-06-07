import React from 'react'
import styled from "styled-components";

const Styled = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: 50px auto;

  img {
    width: 50px;
  }
`
const TextContainer = styled.div`
  text-align: left;
  display: inline-block;
  align-self: end;
`
const Bubble = styled.div`
  display: inline-block;
  margin: 8px;
  padding: 5px 7px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color /*#76778E*/};
  border-radius: 3px;
  position: relative;
  white-space: pre-line;
`
const Arrow = styled.div`
  right: 100%;
	top: 8px;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	border-color: transparent;
	border-right-color: ${props => props.backgroundColor};
	border-width: 3px;
`
const Sender = styled.span`
  text-decoration: underline;
  font-weight: bold;
  padding-right: 4px;
`

export default (props) => (
  <Styled>
    <img src={props.message.avatar} />
    <TextContainer>
      <Bubble backgroundColor={props.me ? '#5152FA' : 'white'} color={props.me ? '#F2F2FF' : '#6D6E86'}>
        <Arrow backgroundColor={props.me ? '#5152FA' : 'white'} />
        <Sender>{props.message.username}:</Sender>
        {props.message.text}
      </Bubble>
    </TextContainer>
  </Styled>
)