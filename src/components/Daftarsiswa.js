import { Helmet } from "react-helmet"
import { Navbar, Rightnav } from "./NavigationBar"
import { Link, Outlet } from "react-router-dom"



const Daftarsiswa = () => {
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
                        <tr>
                            <td className="border border-slate-800">1</td>
                            <td className="border border-slate-800">rizky</td>
                            <td className="border border-slate-800">12145</td>
                            <td className="border border-slate-800">1214571478944</td>
                            <td className="border border-slate-800">Laki-Laki</td>
                            <td className="border border-slate-800">Pangkal Pinang, 11 Juli 2001</td>
                            <td className="border border-slate-800">Islam</td>
                            <td className="border border-slate-800">Jln sungai selan km 4.5</td>
                            <td className="border border-slate-800">
                                <button className="bg-blue-500 my-2 px-2 rounded-md hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato font-semibold tracking-wider">Ubah
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-800">1</td>
                            <td className="border border-slate-800">rizky</td>
                            <td className="border border-slate-800">12145</td>
                            <td className="border border-slate-800">1214571478944</td>
                            <td className="border border-slate-800">Laki-Laki</td>
                            <td className="border border-slate-800">Pangkal Pinang, 11 Juli 2001</td>
                            <td className="border border-slate-800">Islam</td>
                            <td className="border border-slate-800">Jln sungai selan km 4.5</td>
                            <td className="border border-slate-800">
                                <button className="bg-blue-500 my-2 px-2 rounded-md hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato font-semibold tracking-wider">Ubah
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default Daftarsiswa