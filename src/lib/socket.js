import io from 'socket.io-client'

export const CHAT_TOPIC = 'spotim/chat'
let socket

export const connect = (onReady) => {
  socket = io('https://spotim-demo-chat-server.herokuapp.com')
  socket.once('connect', () => {
    onReady((topic, cb) => {
      socket.on(topic, cb)
    })
  })

  return socket
}

export const submitMessage = (message) => {
  socket.emit(CHAT_TOPIC, message)
}