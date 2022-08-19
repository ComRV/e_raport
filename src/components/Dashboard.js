import { Helmet } from "react-helmet"
import { Navbar, Rightnav } from "./NavigationBar"
import school from "../img/school.png"


const Dashboard = () => {
    return (
        <div className="container min-w-full grid grid-row-3 grid-flow-col gap-4 bg-login-pattern h-screen">
            <Helmet><title>Dashboard</title></Helmet>
            <div className="absolute bg-gray-200 w-screen h-10"></div>
            <Navbar route="dashboard" />
            <Rightnav />
            <div>
                <div className="flex flex-col absolute top-12 left-[200px] font-lato font-semibold laptop:flex-row laptop:ml-20">

                    <div className="m-3 w-60 pl-3 pb-14 pt-2 rounded text-slate-100 bg-orange-500">
                        <p className="text-lg">Jumlah Guru Aktif</p>
                        <p className="relative top-12 text-xl">39 Orang</p>
                    </div>

                    <div className="m-3 w-60 pl-3 pb-14 pt-2 rounded text-slate-100 bg-red-500">
                        <p className="text-lg">Jumlah Siswa Aktif</p>
                        <p className="relative top-12 text-xl">0 Orang</p>
                    </div>

                    <div className="m-3 w-60 pl-3 pb-14 pt-2 rounded text-slate-100 bg-purple-800">
                        <p className="text-lg">Jumlah Mata Pelajaran</p>
                        <p className="relative top-12 text-xl">0 Mapel</p>
                    </div>

                    <div className="m-3 w-60 pl-3 pb-14 pt-2 rounded text-slate-100 bg-emerald-500">
                        <p className="text-lg">Jumlah Ekstrakulikuler</p>
                        <p className="relative top-12 text-xl">0 Ekstrakulikuler</p>
                    </div>
                </div>
                <div className="absolute font-lato left-[470px] bg-slate-50 top-[1.65cm] h-[517px] w-2/4 laptop:top-[5.5cm] laptop:h-3/5">
                    <div className="w-full flex flex-row bg-emerald-100">
                        <img src={school} alt="" />
                        <p className="ml-2 text-lg">Informasi Sekolah</p>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="ml-14">
                            <p className="my-3">Nama Sekolah</p>
                            <p className="my-3">NPSN</p>
                            <p className="my-3">Kepala Sekolah</p>
                            <p className="my-3">Kurikulum</p>
                            <p className="my-3">Jumlah Kelas</p>
                            <p className="my-3">Tahun Didirikan</p>
                        </div>
                        <div className="ml-32">
                            <p className="my-3">: Sekolah Dasar Internasional Bangka</p>
                            <p className="my-3">: 10901999</p>
                            <p className="my-3">: M. Sambo S.Pd M.T</p>
                            <p className="my-3">: 2013</p>
                            <p className="my-3">: 12 Kelas</p>
                            <p className="my-3">: 1977</p>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default Dashboard