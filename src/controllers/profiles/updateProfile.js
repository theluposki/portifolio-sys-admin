import { updateProfile } from "../../services/profiles/updateProfile.js"

export const updateProfileController = async (req, res) => {
  const {
    messagemStatus,
    status,
    bio,
    telephone,
    birthDate,
    localization,
  } = req.body

  try {
    const message = await updateProfile({
      messagemStatus,
      status,
      bio,
      telephone,
      birthDate,
      localization,
    }, req.userId)
    res.status(201).json(message)
  } catch (error) {
      return res.status(400).json({ error: "error update profile" })
  }
}
