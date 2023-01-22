import { updateImgProfile } from "../../services/profiles/updateImgProfile.js"

export const updateImgProfileController = async (req, res) => {
  console.log(req.file.filename)
  const FileNameProfile = await req.file.filename

  try {
    const message = await updateImgProfile({
      imgProfile: FileNameProfile
    }, req.userId)
    res.status(201).json(message)
  } catch (error) {
      return res.status(400).json({ error: "error update img" })
  }
}
