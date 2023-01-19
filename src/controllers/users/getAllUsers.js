import { getAll } from "../../services/users/getAllUsers.js"

export const getAllUsers = async (req,res) => {
  const result = await getAll()
  if(result.error) return res.status(400).json(result.error)
  res.status(200).json(result)
}
