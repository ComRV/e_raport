import express from "express";

const app = express()

app.get('/login', (req, res) => {
    res.json({ status: "berhasil" })
})

app.listen(5000, () => {
    console.log("http://localhost:5000")
})