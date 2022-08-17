import Users from "../model/usermodel.mjs"
import Jwt from "jsonwebtoken"

export const Cookietoken = async (req, res) => {
    try {
        const token = req.cookies.token
        if (!token) return res.sendStatus(401)
        await Users.updateOne({ token }, { refreshToken: token })
        const data = await Users.findOne({ refreshToken: token })
        Jwt.verify(token, process.env.REFRESH_TOKEN, (err, decoded) => {
            if (err) return res.sendStatus(403)
            const accessToken = Jwt.sign({ nama: data.nama, username: data.username }, process.env.ACCESS_TOKEN, {
                expiresIn: '15s'
            })
            res.json({ accessToken })
        })

    } catch (error) {
        console.log(error)
    }
}