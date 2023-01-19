import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { config } from "../../config.js"
import { getUserOnlyByEmail } from "../../services/users/getUserOnlyByEmail.js"

export const Auth = async (req,res) => {
    const { email, password } = req.body

    try {

      if (!email || !password ) return res.status(400).json({ error: "enter email and password" })
      
      const existingUser = await getUserOnlyByEmail(email)

      if (!existingUser) return res.status(400).json({ error: "User not found." })
      
      if (!(await bcrypt.compare(password, existingUser.password))) {
        return res.status(400).json({ error: "Invalid password." })
      }

      const token = jwt.sign({ id: existingUser.id }, config.SECRET, {
        expiresIn: 7200
      })

      return res.status(200).json({
        token,
        message: "Authenticated successfully!"
      })


    } catch (error) {
      res.status(400).json({ error: "Unable to authenticate."})
    }
}
