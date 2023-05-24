import { APIUrl } from "../config.js"

const apiCall = async () => {
  const res = await fetch(`${APIUrl}/photos?_page=1&_limit=100`)
  return await res.json()
}

export {
  apiCall
}