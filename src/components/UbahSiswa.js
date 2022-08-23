/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet"
import { useState, useEffect } from "react"
import { Navbar, Rightnav } from "./NavigationBar"
import { Link, Outlet, useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import GetToken from "../token/token"
import arrow from "../img/arrow.png"


const Ubahsiswa = () => {
    const [namaSiswa, setNamaSiswa] = useState('')
    const [noInduk, setNoInduk] = useState('')
    const [NISN, setNISN] = useState('')
    const [jenisKelamin, setJenisKelamin] = useState('Laki-Laki')
    const [tempatLahir, setTempatLahir] = useState('')
    const [tglLahir, setTglLahir] = useState('')
    const [agama, setAgama] = useState('Islam')
    const [alamat, setAlamat] = useState('')
    const [msg, setMsg] = useState('')
    const { Id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getSiswa()
    }, [])

    const Updatesiswa = async (e) => {
        try {
            e.preventDefault()
            const token = await GetToken()
            const res = await axios.patch(`http://localhost:5000/ubahsiswa/${Id}`, { namaSiswa, noInduk, NISN, jenisKelamin, tempatLahir, tglLahir, agama, alamat }, { headers: { Authorization: `Bearer ${token}` } })
            setMsg(res.data.message)
            setTimeout(() => {
                navigate('/daftarsiswa')
            }, 1500)
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message)
            }
        }
    }

    const getSiswa = async () => {
        const token = await GetToken()
        const res = await axios.get(`http://localhost:5000/daftarsiswa/${Id}`, { headers: { Authorization: `Bearer ${token}` } })
        setNamaSiswa(res.data.namaSiswa)
        setNoInduk(res.data.noInduk)
        setNISN(res.data.NISN)
        setJenisKelamin(res.data.jenisKelamin)
        setTempatLahir(res.data.tempatLahir)
        setTglLahir(res.data.tglLahir)
        setAgama(res.data.agama)
        setAlamat(res.data.alamat)
    }


    return (
        <div className="container min-w-full grid grid-row-3 grid-flow-col gap-4 bg-login-pattern h-screen">
            <Helmet><title>Edit Siswa</title></Helmet>
            <div className="absolute bg-gray-200 w-screen h-10"></div>
            <Navbar route="daftarsiswa" />
            <Rightnav />
            <div className="absolute left-[220px] top-12 z-10 laptop:left-[300px]">
                <Link to="/daftarsiswa">
                    <button><img src={arrow} alt="arrow" className="w-6" /></button>
                    <Outlet />
                </Link>
                <form onSubmit={Updatesiswa}>
                    {msg && <p className="font-sans font-medium text-green-500 bg-green-100 rounded-md pl-2 drop-shadow-md">{msg}</p>}
                    <div className="flex flex-col">
                        <label className="font-rubik">Nama Siswa</label>
                        <input type="text" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={namaSiswa} onChange={e => setNamaSiswa(e.target.value)} placeholder="Nama Siswa" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">No Induk</label>
                        <input onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }} type="number" maxLength={5} className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={noInduk} onChange={e => setNoInduk(e.target.value)} placeholder="No Induk" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">NISN</label>
                        <input onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }} type="number" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" maxLength={10} value={NISN} onChange={e => setNISN(e.target.value)} placeholder="NISN" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Jenis Kelamin</label>
                        <select className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={jenisKelamin} onChange={e => setJenisKelamin(e.target.value)}>
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Tempat Lahir</label>
                        <input type="text" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={tempatLahir} onChange={e => setTempatLahir(e.target.value)} placeholder="Tempat Lahir" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Tanggal Lahir</label>
                        <input type="date" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={tglLahir} onChange={e => setTglLahir(e.target.value)} required />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Agama</label>
                        <select className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={agama} onChange={e => setAgama(e.target.value)}>
                            <option value="Islam">Islam</option>
                            <option value="Kristen">Kristen</option>
                            <option value="Katolik / Protestan">Katolik / Protestan</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Buddha">Buddha</option>
                            <option value="Khonghucu">Khonghucu</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Alamat</label>
                        <textarea cols="35" rows="2" className="pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" value={alamat} onChange={e => setAlamat(e.target.value)}></textarea>
                    </div>
                    <div className='flex flex-col'>
                        <button className='bg-blue-500 w-2/4 h-9 rounded-md mt-3 hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato font-semibold text-gray-200 tracking-wider' placeholder="Alamat">Edit Siswa</button>
                    </div>
                </form>
            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default Ubahsiswa