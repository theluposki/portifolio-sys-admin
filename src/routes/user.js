import { Router } from "express"
import { registerUser } from "../controllers/users/createUser.js"
import { getAllUsers } from "../controllers/users/getAllUsers.js"

const router = Router()

router.get("/", getAllUsers)
router.post("/", registerUser)

export default router
