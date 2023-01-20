import { Router } from "express"
import multer from "multer"
import { registerProfile } from "../controllers/profiles/createProfile.js"
import { config } from "../config.js"
import authenticated from "../middlewares/auth.js"

const router = Router()

const upload = multer(config.multerConfig)

const cpUpload = upload.fields([{ name: 'imgProfile', maxCount: 1 }, { name: 'imgFrontCover', maxCount: 1 }])
//upload.single("imgProfile")
router.post("/", authenticated, cpUpload, registerProfile)

export default router
