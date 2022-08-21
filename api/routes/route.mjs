import Express from "express";
import { Register, Login, Logout } from "../controller/usercontroller.mjs";
import { tambahSiswa, daftarSiswa } from "../controller/siswacontroller.mjs";
import { Cookietoken } from "../controller/cookietoken.mjs";
import { verifyToken } from "../middleware/verifytoken.mjs";

const router = Express.Router()

router.get('/daftarsiswa', verifyToken, daftarSiswa)
router.post('/register', Register)
router.post('/login', Login)
router.post('/tambahsiswa', verifyToken, tambahSiswa)
router.delete('/logout', Logout)
router.get('/token', Cookietoken)

export default router