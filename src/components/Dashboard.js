/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"

const Dashboard = () => {
    const [nama, setNama] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        GetToken()
    }, [])

    const Logout = async () => {
        try {
            await axios.delete("http://localhost:5000/logout")
            navigate('/login')

        } catch (error) {
            console.log(error)
        }
    }

    const GetToken = async () => {
        try {
            const response = await axios.get("http://localhost:5000/token")
            const decoded = jwtDecode(response.data.accessToken)
            setNama(decoded.nama)
        } catch (error) {
            if (error.response) {
                navigate('/login')
            }
        }
    }

    return (
        <div>
            <Helmet><title>Dashboard</title></Helmet>
            <p>Selamat Datang, {nama}</p>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default Dashboard