import { Router } from "express"
import multer from "multer"

import { config } from "../config.js"
import authenticated from "../middlewares/auth.js"

import { registerProfile } from "../controllers/profiles/createProfile.js"
import { updateImgProfileController } from "../controllers/profiles/updateImgProfile.js"
import { updateProfileController } from "../controllers/profiles/updateProfile.js"
import { updateImgFrontCoverController } from "../controllers/profiles/updateImgFrontCover.js"
import { myProfile } from "../controllers/profiles/myProfile.js"

const router = Router()

const upload = multer(config.multerConfig)

router.post("/updateImgProfile", authenticated, upload.single("imgProfile"), updateImgProfileController)
router.post("/updateImgFrontCover", authenticated, upload.single("imgFrontCover"), updateImgFrontCoverController)
router.post("/", authenticated, registerProfile)
router.get("/my-profile", authenticated, myProfile)
router.put("/", authenticated, updateProfileController)

export default router
