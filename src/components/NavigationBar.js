/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { Link, Outlet, useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import menuBar from "../img/menuBar.png"
import closeBar from "../img/closeBar.png"
import school from "../img/school.png"
import user from "../img/user.png"
import pendidikan from "../img/pendidikan.png"

const Navbar = (props) => {
    const [bar, setBar] = useState('')
    const [toggleMenu, setToogleMenu] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setBar(props.route)
    }, [])

    const Logout = async () => {
        try {
            await axios.delete("http://localhost:5000/logout")
            navigate('/login')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="row-span-3 z-10">
            <div className={`w-48 fixed laptop:w-64 ${toggleMenu ? "bg-transparent" : "bg-gray-200 h-screen"}`}>
                <div className={`flex ${!toggleMenu && "flex-row justify-between mx-4"}`}>
                    {!toggleMenu && <h1 className="mt-2 font-lato font-semibold laptop:text-xl">E-Rapor</h1>}
                    <button onClick={() => setToogleMenu(!toggleMenu)} className={`mt-2 ${toggleMenu && "ml-3"}`}>
                        {toggleMenu ?
                            <img src={menuBar} alt="menuBar" className="w-6" /> :
                            <img src={closeBar} alt="closeBar" className="w-6 laptop:w-7" />}
                    </button>
                </div>

                <div className={`mt-5 font-lato font-semibold laptop:text-lg ${!toggleMenu ? "block" : "hidden"}`}>
                    <img src={pendidikan} alt="pendidikan" className="w-2/4 m-auto" />
                    <h1 className="text-center mt-1 laptop:text-lg" >SD Internasional Bangka</h1>
                    <ul className="text-sm mt-2 laptop:text-base">
                        <li>
                            <Link to="/dashboard">
                                <button className={`py-2 pl-4 pr-[56%] duration-150 ${bar === "dashboard" ? "bg-gray-400" : "hover:bg-gray-300 active:bg-gray-400"} laptop:pr-[63.5%]`}>Dashboard</button>
                                <Outlet />
                            </Link>
                        </li>
                        <li>
                            <Link to="/daftarsiswa">
                                <button className={`py-2 pl-4 pr-[51%] duration-150 ${bar === "daftarsiswa" ? "bg-gray-400" : "hover:bg-gray-300 active:bg-gray-400"} laptop:pr-[58.5%]`}>Daftar Siswa</button>
                                <Outlet />
                            </Link>
                        </li>
                        <li>
                            <Link to="/daftarnilai">
                                <button className={`py-2 pl-4 pr-[38%] duration-150 ${bar === "daftarnilai" ? "bg-gray-400" : "hover:bg-gray-300 active:bg-gray-400"} laptop:pr-[47.5%]`}>Pengolahan Nilai</button>
                                <Outlet />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <button className="py-2 pl-4 pr-[51.5%] duration-150 hover:bg-gray-300 active:bg-gray-400 laptop:pr-[59%]">Cetak Rapor</button>
                                <Outlet />
                            </Link>
                        </li>
                        <li>
                            <button className="py-2 pl-4 pr-[69%] duration-150 hover:bg-gray-300 active:bg-gray-400 laptop:pr-[74.5%]" onClick={Logout}>Logout</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

const Rightnav = () => {
    const [nama, setNama] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        GetToken()
    }, [])

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
        <div className="row-span-2 mt-2 mr-5 z-10 font-lato font-semibold" >

            <div className="float-right ml-6">
                <div className="flex flex-row rounded-md">
                    <img src={user} alt="user" className="w-6" />
                    <p>{nama}</p>
                </div>
            </div>

            <div className="flex-row float-right hidden tablet:flex">
                <img src={school} alt="school" />
                <p className="ml-1">SD Internasional Bangka</p>
            </div>
        </div >
    )
}

export { Navbar, Rightnav }