import { api } from "../api.js"

const ENDPOINT = "/users"

export const register = async (body) => {
  const { name, nickname, email, password } = body

  if(!name || !nickname || !email || !password) return { error: "Preencha todos os dados" }

  return await api(ENDPOINT, "post", body)
}

