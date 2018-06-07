
const AVATAR_URL = 'AVATAR_URL'
const UUID = 'UUID'
const USERNAME = 'USERNAME'

export const getAvatarURL = async () => {
  return await localStorage.getItem(AVATAR_URL)
}

export const setAvatarURL = async (url) => {
  await localStorage.setItem(AVATAR_URL, url)
  
  return url
}

export const getUUID = async () => {
  return await localStorage.getItem(UUID)
}

export const setUUID = async (uuid) => {
  await localStorage.setItem(UUID, uuid)

  return uuid
}

export const getUsername = async () => {
  return await localStorage.getItem(USERNAME)

}
export const setUsername = async (username) => {
  await localStorage.setItem(USERNAME, username)

  return username
}