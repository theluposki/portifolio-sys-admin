import { getUserOnlyByEmail } from "../../services/users/getUserOnlyByEmail.js"
import { createUser } from "../../services/users/createUser.js"

export const registerUser = async (req, res) => {
  const { name, nickname, email, password } = req.body
  
  if (!name || !nickname || !email || !password ) {
    const messageError = "to register you need some essential data. [ name, nickname, email, password ]"
    return res.status(400).json({ error: messageError })
  }
  
  try {

    const existingUser = await getUserOnlyByEmail(email)

    if (existingUser) return res.status(400).json({ error: "User already exists" })
  
    const regexEmail = /\S+@\S+\.\S+/
    
    if(null === email.match(regexEmail)) {
      const messageError = "use a valid email!"
      return res.status(400).json({ error: messageError})
    }

    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    
    if(null === password.match(regexPassword)) {
      const messageError = "The password must have a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number!"
      return res.status(400).json({ error: messageError})
    }

    const message = await createUser({
      name, 
      nickname,
      email, 
      password
    })
    res.status(201).json(message)
  } catch (error) {
      return res.status(400).json({ error: "error registering" })
  }
}
