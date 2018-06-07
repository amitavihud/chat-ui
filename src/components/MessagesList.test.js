import React from 'react'
import renderer from 'react-test-renderer';
import MessagesList from './MessagesList'

describe('MessagesList component', () => {
  it('renders the tree', () => {
    const tree = renderer.create(
      <MessagesList messages={[]} />
    )

    expect(tree).toMatchSnapshot()
  })

  describe('there are some messages', () => {
    it('renders them', () => {
      const tree = renderer.create(
        <MessagesList messages={[
          { text: '1', username: 'Donald', avatar: 'someurl.com/1.png' },
          { text: '1', username: 'Kim', avatar: 'someurl.com/2.png' }
        ]} />
      )

      expect(tree).toMatchSnapshot()
    })
  })
})