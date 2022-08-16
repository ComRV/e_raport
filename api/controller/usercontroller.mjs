import Users from "../model/usermodel.mjs";
import argon2 from "argon2";

const Register = async (req, res) => {
    const data = new Users(req.body)
    const findNama = await Users.find({
        nama: req.body.nama
    }).exec()
    const findUsername = await Users.find({
        username: req.body.username
    }).exec()

    try {
        data.password = await argon2.hash(data.password)
        if (findNama.length > 0) return res.status(400).json({ message: 'Nama telah digunakan' });
        if (findUsername.length > 0) return res.status(400).json({ message: 'Username telah digunakan' });
        await data.save()
        res.status(200).json({ message: "Registrasi berhasil" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export { Register }