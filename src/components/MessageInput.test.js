import React from 'react'
import renderer from 'react-test-renderer';
import MessageInput from './MessageInput'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('MessageInput component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MessageInput />
    )

    expect(tree).toMatchSnapshot()
  })

  describe('the message field is empty', () => {
    it('does not allow the user to send her message', () => {
      const wrapper = mount(<MessageInput />)
      const send = wrapper.find('button')

      expect(send.is('[disabled]')).toBe(true)
    })
  })

  describe('the message field contains something', () => {
    it('allows the user to send her message', () => {
      const wrapper = mount(<MessageInput />)

      wrapper.find('textarea').value = 'something'
      wrapper.find('textarea').simulate('change')
      
      const send = wrapper.find('button')
      expect(send.is('[disabled]')).toBe(true)
    })
  })
})