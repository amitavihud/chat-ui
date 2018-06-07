import React from 'react'
import styled from "styled-components";

import snorlax from './assets/001-snorlax.png'

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

export default (props) => (
  <Styled>
    <img src={snorlax} />
    <TextContainer>
      <Bubble backgroundColor={'#5152FA'} color={'#F2F2FF'}>
        <Arrow backgroundColor={'#5152FA'} />
        {props.children}
      </Bubble>
    </TextContainer>
  </Styled>
)