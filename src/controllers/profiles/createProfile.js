import { createProfile } from "../../services/profiles/createProfile.js"

export const registerProfile = async (req, res) => {
  const {
    messagemStatus,
    status,
    bio,
    telephone,
    birthDate,
    localization,
  } = req.body

  try {
    const message = await createProfile({
      messagemStatus,
      status,
      bio,
      telephone,
      birthDate,
      localization,
    }, req.userId)
    res.status(201).json(message)
  } catch (error) {
      return res.status(400).json({ error: "error registering" })
  }
}
