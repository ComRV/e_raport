/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet"
import { Navbar, Rightnav } from "./NavigationBar"
import { Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const Daftarsiswa = () => {
    const [siswa, setSiswa] = useState([])

    useEffect(() => {
        getDaftarSiswa()
    }, [])

    const HapusSiswa = async (id) => {
        const GetToken = await axios.get("http://localhost:5000/token")
        const token = GetToken.data.accessToken
        const res = await axios.delete(`http://localhost:5000/hapussiswa/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        alert(res.data.message)
        window.location.reload()
    }
    const getDaftarSiswa = async () => {
        const GetToken = await axios.get("http://localhost:5000/token")
        const token = GetToken.data.accessToken
        const res = await axios.get("http://localhost:5000/daftarsiswa/all", { headers: { Authorization: `Bearer ${token}` } })
        setSiswa(res.data)
    }


    return (
        <div className="container min-w-full grid grid-row-3 grid-flow-col gap-4 bg-login-pattern h-screen">
            <Helmet><title>Daftar Siswa</title></Helmet>
            <div className="absolute bg-gray-200 w-screen h-10"></div>
            <Navbar route="daftarsiswa" />
            <Rightnav />
            <div className="absolute left-[220px] top-16 z-10 laptop:left-[300px]">
                <div className="w-[140px]">
                    <Link to="/daftarsiswa/tambahsiswa">
                        <button className="flex flex-row rounded-md font-rubik text-sm text-white bg-blue-500 py-1 px-4 hover:bg-blue-600 active:bg-blue-700">+ Tambah Siswa</button>
                        <Outlet />
                    </Link>
                </div>
                <table className="w-[1000px] text-center mt-4 font-lato border-collapse border-2 border-slate-800">
                    <thead>
                        <tr>
                            <th className="border border-slate-800">No</th>
                            <th className="border border-slate-800">Nama</th>
                            <th className="border border-slate-800">No Induk</th>
                            <th className="border border-slate-800">NISN</th>
                            <th className="border border-slate-800">Jenis Kelamin</th>
                            <th className="border border-slate-800">Tempat Tgl Lahir</th>
                            <th className="border border-slate-800">Agama</th>
                            <th className="border border-slate-800">Alamat</th>
                            <th className="border border-slate-800">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {siswa.map((s, i) => (
                            <tr key={s._id}>
                                <td className="border border-slate-800">{i + 1}</td>
                                <td className="border border-slate-800">{s.namaSiswa}</td>
                                <td className="border border-slate-800">{s.noInduk}</td>
                                <td className="border border-slate-800">{s.NISN}</td>
                                <td className="border border-slate-800">{s.jenisKelamin}</td>
                                <td className="border border-slate-800">{`${s.tempatLahir}, ${s.tglLahir}`}</td>
                                <td className="border border-slate-800">{s.agama}</td>
                                <td className="border border-slate-800">{s.alamat}</td>
                                <td className="border border-slate-800">
                                    <Link to={`/daftarsiswa/ubahsiswa/${s._id}`}>
                                        <button className="bg-blue-500 my-2 px-2 rounded-md hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato text-white tracking-wider">Ubah
                                        </button> |
                                        <Outlet />
                                    </Link>
                                    <button className="bg-blue-500 my-2 px-2 rounded-md hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato text-white tracking-wider" onClick={() => HapusSiswa(s._id)}>Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default Daftarsiswa