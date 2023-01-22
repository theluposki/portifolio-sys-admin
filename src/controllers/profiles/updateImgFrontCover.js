import { updateImgFrontCover } from "../../services/profiles/updateImgFrontCover.js"

export const updateImgFrontCoverController = async (req, res) => {

  const FileNameFrontCover = await req.file.filename

  try {
    const message = await updateImgFrontCover({
      imgFrontCover: FileNameFrontCover
    }, req.userId)
    res.status(201).json(message)
  } catch (error) {
      return res.status(400).json({ error: "error update img" })
  }
}
