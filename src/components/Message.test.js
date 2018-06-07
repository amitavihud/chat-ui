import React from 'react'
import renderer from 'react-test-renderer';
import Message from './Message'

describe('Message component', () => {
  it('renders the tree', () => {
    const tree = renderer.create(
      <Message 
        message={{}}
        me={false} />
    )

    expect(tree).toMatchSnapshot()
  })

  describe('it is me', () => {
    it('renders the tree correctly', () => {
      const tree = renderer.create(
        <Message
          message={{}}
          me />
      )

      expect(tree).toMatchSnapshot()
    })
  })
})