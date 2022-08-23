/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet"
import { Navbar, Rightnav } from "./NavigationBar"
import { Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const Daftarnilai = () => {
    const [siswa, setSiswa] = useState([])

    useEffect(() => {
        getDaftarSiswa()
    }, [])

    const getDaftarSiswa = async () => {
        const GetToken = await axios.get("http://localhost:5000/token")
        const token = GetToken.data.accessToken
        const res = await axios.get("http://localhost:5000/daftarsiswa/all", { headers: { Authorization: `Bearer ${token}` } })
        setSiswa(res.data)
    }


    return (
        <div className="container min-w-full grid grid-row-3 grid-flow-col gap-4 bg-login-pattern h-screen">
            <Helmet><title>Daftar Nilai</title></Helmet>
            <div className="absolute bg-gray-200 w-screen h-10"></div>
            <Navbar route="daftarnilai" />
            <Rightnav />
            <div className="absolute left-[220px] top-16 z-10 laptop:left-[300px]">
                <div className="w-[150px]">
                    <Link to="/daftarnilai/pengolahnilai">
                        <button className="flex flex-row rounded-md font-rubik text-sm text-white bg-blue-500 py-1 px-4 hover:bg-blue-600 active:bg-blue-700">Pengolahan Nilai</button>
                        <Outlet />
                    </Link>
                </div>
                <table className="w-[1000px] text-center mt-4 font-lato border-collapse border-2 border-slate-800">
                    <thead>
                        <tr>
                            <th className="border border-slate-800">No</th>
                            <th className="border border-slate-800">Nama</th>
                            <th className="border border-slate-800">PABP</th>
                            <th className="border border-slate-800">PPKN</th>
                            <th className="border border-slate-800">Bhs Indonesia</th>
                            <th className="border border-slate-800">Matematika</th>
                            <th className="border border-slate-800">IPA</th>
                            <th className="border border-slate-800">IPS</th>
                            <th className="border border-slate-800">Rata-Rata</th>
                        </tr>
                    </thead>
                    <tbody>
                        {siswa.map((s, i) => (
                            <tr key={s._id}>
                                <td className="border border-slate-800">{i + 1}</td>
                                <td className="border border-slate-800">{s.namaSiswa}</td>
                                <td className="border border-slate-800">{s.nilaiMapel.PABP}</td>
                                <td className="border border-slate-800">{s.nilaiMapel.PPKN}</td>
                                <td className="border border-slate-800">{s.nilaiMapel.BIndo}</td>
                                <td className="border border-slate-800">{s.nilaiMapel.Matematika}</td>
                                <td className="border border-slate-800">{s.nilaiMapel.IPA}</td>
                                <td className="border border-slate-800">{s.nilaiMapel.IPS}</td>
                                <td className="border border-slate-800">{s.nilaiMapel.Average}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default Daftarnilai