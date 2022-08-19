import { Helmet } from "react-helmet"
import { Navbar, Rightnav } from "./NavigationBar"
import { Link, Outlet } from "react-router-dom"
import arrow from "../img/arrow.png"

const Daftarsiswa = () => {
    return (
        <div className="container min-w-full grid grid-row-3 grid-flow-col gap-4 bg-login-pattern h-screen">
            <Helmet><title>Tambah Siswa</title></Helmet>
            <div className="absolute bg-gray-200 w-screen h-10"></div>
            <Navbar route="daftarsiswa" />
            <Rightnav />
            <div className="absolute left-[220px] top-14 z-10 laptop:left-[300px]">
                <Link to="/daftarsiswa">
                    <button><img src={arrow} alt="arrow" className="w-8" /></button>
                    <Outlet />
                </Link>
                <form>
                    <div className="flex flex-col">
                        <label className="font-rubik">Nama Siswa</label>
                        <input type="text" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" placeholder="Nama Siswa" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">No Induk</label>
                        <input onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }} type="number" maxLength={5} className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" placeholder="No Induk" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">NISN</label>
                        <input onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }} type="number" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" maxLength={10} placeholder="NISN" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Tempat Lahir</label>
                        <input type="text" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" placeholder="Tempat Lahir" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Tanggal Lahir</label>
                        <input type="date" className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Agama</label>
                        <select className="h-9 pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg">
                            <option value="" key="">Islam</option>
                            <option value="" key="">Kristen</option>
                            <option value="" key="">Katolik / Protestan</option>
                            <option value="" key="">Hindu</option>
                            <option value="" key="">Buddha</option>
                            <option value="" key="">Khonghucu</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-rubik">Alamat</label>
                        <textarea cols="35" rows="2" className="pl-2 my-1 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg"></textarea>
                    </div>
                    <div className='flex flex-col'>
                        <button className='bg-blue-500 w-2/4 h-9 rounded-md mt-3 hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato font-semibold text-gray-200 tracking-wider' placeholder="Alamat">Daftar Siswa</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Daftarsiswa