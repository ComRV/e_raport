import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.mjs";
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect(`mongodb://rzd2508:${process.env.DB_PASS}@ac-xk8hmw4-shard-00-00.eoei0sh.mongodb.net:27017,ac-xk8hmw4-shard-00-01.eoei0sh.mongodb.net:27017,ac-xk8hmw4-shard-00-02.eoei0sh.mongodb.net:27017/E_Rapor?ssl=true&replicaSet=atlas-ukimgm-shard-0&authSource=admin&retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
    console.log('connect database sucessfully')
})

app.listen(5000, () => {
    console.log("http://localhost:5000")
})