import io from 'socket.io-client'

export const getStream = () => {
  return io('https://spotim-demo-chat-server.herokuapp.com')
}