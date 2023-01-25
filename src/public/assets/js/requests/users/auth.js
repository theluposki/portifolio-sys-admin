import { api } from "../api.js"

const ENDPOINT = "/users/auth"

export const auth = async (body) => {
  const { email, password } = body

  if(!email || !password) return { error: "Preencha todos os dados" }

  return await api(ENDPOINT, "post", body)
}

