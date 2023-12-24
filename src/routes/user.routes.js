import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(registerUser) // will activate registerUser controller
// router.route("/login").post(loginUser)   // will activate loginUser controller



export default router