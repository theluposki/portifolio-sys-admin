import { Router } from "express"
import { registerUser } from "../controllers/users/createUser.js"
import { getAllUsers } from "../controllers/users/getAllUsers.js"
import { Auth } from "../controllers/users/auth.js"

import authenticated from "../middlewares/auth.js"

const router = Router()

router.post("/auth", Auth)
router.get("/", authenticated,getAllUsers)
router.post("/", registerUser)

export default router
