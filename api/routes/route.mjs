import Express from "express";
import { Register, Login, Logout } from "../controller/usercontroller.mjs";
import { Cookietoken } from "../controller/cookietoken.mjs";

const router = Express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.delete('/logout', Logout)
router.get('/token', Cookietoken)

export default router