
const AVATAR_URL = 'AVATAR_URL'
const UUID = 'UUID'
const USERNAME = 'USERNAME'

export const getAvatarURL = () => {
  return localStorage.getItem(AVATAR_URL)
}

export const setAvatarURL = (url) => {
  localStorage.setItem(AVATAR_URL, url)
  
  return url
}

export const getUUID = () => {
  return localStorage.getItem(UUID)
}

export const setUUID = (uuid) => {
  localStorage.setItem(UUID, uuid)

  return uuid
}

export const getUsername = () => {
  return localStorage.getItem(USERNAME)

}
export const setUsername = (username) => {
  localStorage.setItem(USERNAME, username)

  return username
}