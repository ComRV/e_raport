import Express from "express";
import { Register, Login, Logout } from "../controller/usercontroller.mjs";
import { tambahSiswa, daftarSiswa, ubahSiswa, hapusSiswa } from "../controller/siswacontroller.mjs";
import { Cookietoken } from "../controller/cookietoken.mjs";
import { verifyToken } from "../middleware/verifytoken.mjs";
import { inputNilai, raporpdf } from "../controller/nilaicontroller.mjs";

const router = Express.Router()

router.get('/daftarsiswa/:id', verifyToken, daftarSiswa)
router.post('/register', Register)
router.post('/login', Login)
router.post('/tambahsiswa', verifyToken, tambahSiswa)
router.patch('/ubahsiswa/:id', verifyToken, ubahSiswa)
router.delete('/logout', Logout)
router.delete('/hapussiswa/:id', verifyToken, hapusSiswa)
router.get('/token', Cookietoken)
router.patch('/inputnilai/:id', verifyToken, inputNilai)
router.get('/rapor/:id', verifyToken, raporpdf)


export default router