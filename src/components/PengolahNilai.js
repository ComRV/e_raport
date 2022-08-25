/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet"
import { Navbar, Rightnav } from "./NavigationBar"
import axios from "axios"
import { useState, useEffect } from "react"
import arrow from "../img/arrow.png"
import { Outlet, Link } from "react-router-dom"
import GetToken from "../token/token"

const PengolahNilai = () => {
    const [siswa, setSiswa] = useState([])
    const [IdSiswa, setIdSiswa] = useState('')
    const [PABP, setPABP] = useState('')
    const [PPKN, setPPKN] = useState('')
    const [BIndo, setBIndo] = useState('')
    const [Matematika, setMatematika] = useState('')
    const [IPA, setIPA] = useState('')
    const [IPS, setIPS] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(() => {
        getDaftarSiswa()
    }, [])

    const getDaftarSiswa = async () => {
        const token = await GetToken()
        const res = await axios.get("http://localhost:5000/daftarsiswa/all", { headers: { Authorization: `Bearer ${token}` } })
        setSiswa(res.data)
        setIdSiswa(res.data[0]._id)
        setPABP(res.data[0].nilaiMapel.PABP)
        setPPKN(res.data[0].nilaiMapel.PPKN)
        setBIndo(res.data[0].nilaiMapel.BIndo)
        setMatematika(res.data[0].nilaiMapel.Matematika)
        setIPA(res.data[0].nilaiMapel.IPA)
        setIPS(res.data[0].nilaiMapel.IPS)
    }

    const Inputnilai = async (e) => {
        e.preventDefault()
        const token = await GetToken()
        const res = await axios.patch(`http://localhost:5000/inputnilai/${IdSiswa}`, { PABP: parseInt(PABP), PPKN: parseInt(PPKN), BIndo: parseInt(BIndo), Matematika: parseInt(Matematika), IPA: parseInt(IPA), IPS: parseInt(IPS) }, { headers: { Authorization: `Bearer ${token}` } })
        setMsg(res.data.message)
    }

    const setNilai = async (id) => {
        const token = await GetToken()
        const res = await axios.get(`http://localhost:5000/daftarsiswa/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        setIdSiswa(id)
        setPABP(res.data.nilaiMapel.PABP)
        setPPKN(res.data.nilaiMapel.PPKN)
        setBIndo(res.data.nilaiMapel.BIndo)
        setMatematika(res.data.nilaiMapel.Matematika)
        setIPA(res.data.nilaiMapel.IPA)
        setIPS(res.data.nilaiMapel.IPS)
    }
    return (
        <div className="container min-w-full grid grid-row-3 grid-flow-col gap-4 bg-login-pattern h-screen">
            <Helmet>
                <title>Pengolahan Nilai</title>
            </Helmet>
            <div className="absolute bg-gray-200 w-screen h-10"></div>
            <Navbar route="daftarnilai" />
            <Rightnav />
            <div className="absolute left-[220px] top-16 z-10 laptop:left-[300px]">
                <Link to="/daftarnilai">
                    <button><img src={arrow} alt="arrow" className="w-6" /></button>
                    <Outlet />
                </Link>
                <p className="text-center font-rubik text-2xl mb-2">Daftar Nilai</p>
                <form onSubmit={Inputnilai}>
                    {msg && <p className="font-sans font-medium text-green-500 bg-green-100 rounded-md pl-2 drop-shadow-md">{msg}</p>}
                    <div className="flex flex-col">
                        <label className="font-rubik">Daftar Siswa</label>
                        <select className="h-9 pl-2 my-1 border-2 w-2/4 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={IdSiswa} onChange={e => setNilai(e.target.value)}>
                            {siswa.map(s => (
                                <option value={s._id}>{s.namaSiswa}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Pendidikan Agama dan Budi Pekerti</label>
                        <input type="number" className="h-9 pl-2 my-1 border-2 w-1/5 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={PABP} onChange={e => setPABP(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Pendidikan Pancasila dan Kewarganegaraan</label>
                        <input type="number" className="h-9 pl-2 my-1 border-2 w-1/5 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={PPKN} onChange={e => setPPKN(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Bahasa Indonesia</label>
                        <input type="number" className="h-9 pl-2 my-1 border-2 w-1/5 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={BIndo} onChange={e => setBIndo(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Matematika</label>
                        <input type="number" className="h-9 pl-2 my-1 border-2 w-1/5 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={Matematika} onChange={e => setMatematika(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Ilmu Pengetahuan Alam</label>
                        <input type="number" className="h-9 pl-2 my-1 border-2 w-1/5 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={IPA} onChange={e => setIPA(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Ilmu Pengetahuan Sosial</label>
                        <input type="number" className="h-9 pl-2 my-1 border-2 w-1/5 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={IPS} onChange={e => setIPS(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <button className='bg-blue-500 w-2/4 h-9 rounded-md mt-3 hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato font-semibold text-gray-200 tracking-wider'>Input Nilai</button>
                    </div>
                </form>
            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div >
    )
}

export default PengolahNilai