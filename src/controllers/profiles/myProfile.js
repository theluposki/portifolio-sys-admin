import { getMyProfile } from "../../services/profiles/myProfile.js"

export const myProfile = async (req, res) => {
  try {
    const profile = await getMyProfile(req.userId)
    console.log(profile)
    res.status(200).json(profile)
  } catch (error) {
      return res.status(400).json({ error: "error when searching profile" })
  }
}
