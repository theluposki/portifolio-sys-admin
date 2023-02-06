import { api } from "../api.js"

const ENDPOINT = "/profiles/my-profile"

export const myProfile = async () => {
  return await api(ENDPOINT, "get", null, true)
}

