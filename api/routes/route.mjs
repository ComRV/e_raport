import Express from "express";
import { Register } from "../controller/usercontroller.mjs";

const router = Express.Router()

router.post('/register', Register)

export default router