import Users from "../model/usermodel.mjs";
import Jwt from "jsonwebtoken";
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

const Login = async (req, res) => {
    try {
        const user = await Users.find({
            username: req.body.username
        }).exec()

        const data = user[0]

        const match = await argon2.verify(data.password, req.body.password)
        if (!match) return res.status(400).json({ message: 'Password anda salah' })
        const accessToken = Jwt.sign({ nama: data.nama, username: data.username }, process.env.ACCESS_TOKEN, { expiresIn: '20s' })

        const refreshToken = Jwt.sign({ nama: data.nama, username: data.username }, process.env.REFRESH_TOKEN, { expiresIn: '1d' })

        await Users.updateOne(
            { username: req.body.username },
            { refreshToken }
        )

        res.cookie('token', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.json({ accessToken })

    } catch (error) {
        res.status(404).json({ message: "Username anda salah" });
    }
}

const Logout = async (req, res) => {
    const token = req.cookies.token
    if (!token) return res.sendStatus(204)
    await Users.updateOne({ refreshToken: token }, { refreshToken: null })
    res.clearCookie('token')
    return res.sendStatus(200)
}

export { Register, Login, Logout }