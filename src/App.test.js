
const eventHandlers = {}
const mockOn = jest.fn((topic, cb) => {
  eventHandlers[topic] = cb
})
jest.mock('./lib/socket', () => {
  return {
    CHAT_TOPIC: 'CHAT_TOPIC',
    connect: jest.fn((cb) => {
      cb(mockOn)
    }),
    submitMessage: jest.fn(),
    disconnect: jest.fn()
  }
})
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const { connect, submitMessage, disconnect } = require('./lib/socket')

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

beforeEach(() => {
  connect.mockClear()
  submitMessage.mockClear()
  for (var key in eventHandlers) {
    delete eventHandlers[key]
  }
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('connection to websocket', () => { 
  it('connects to websocket', async () => {
    const wrapper = mount(<App />)

    expect(connect).toHaveBeenCalledTimes(1)
    expect(wrapper.instance().state.ready).toBe(true)
  })

  describe('a message is received', () => {
    it('adds the message to the list', async () => {
      const wrapper = mount(<App />)

      const message = {}
      await eventHandlers['CHAT_TOPIC'](message)

      expect(wrapper.instance().state.messages).toContain(message)
    })
  })
})

describe('sending a message', () => {
  it('emits the message to the web socket', async () => {
    const wrapper = mount(<App />)
    const message = { message: '1'}
    wrapper.instance().handleSubmit(message)

    expect(submitMessage).toHaveBeenCalledWith(expect.objectContaining({text: '1'}))
  })
})

describe('unmounting', () => {
  it('disconnects the socket', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);

    expect(disconnect).toHaveBeenCalled()
  })
})