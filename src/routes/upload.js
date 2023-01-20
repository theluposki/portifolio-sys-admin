import { Router } from "express"
import multer from "multer"
import { config } from "../config.js"
const path = "../public/upload"

const router = Router()

router.post("/", multer(config.multerConfig).single("file"), (req,res) => {
  console.log(req.file)

  res.status(200).json({ message: "upload concluido." })
})

export default router


