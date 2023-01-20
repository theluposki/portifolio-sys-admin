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

  const FileNameProfile = await req.files["imgProfile"][0].filename
  const FileNameFrontCover = await req.files["imgFrontCover"][0].filename

  
  try {
    const message = await createProfile({
      messagemStatus,
      status,
      imgProfile: FileNameProfile,
      imgFrontCover: FileNameFrontCover,
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
