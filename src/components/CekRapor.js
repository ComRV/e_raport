import { Helmet } from "react-helmet"
import pendidikan from "../img/pendidikan.png"

const CekRapor = () => {
    return (
        <div className="bg-login-pattern min-w-full h-screen m-auto">
            <Helmet>
                <title>Cek Rapor</title>
            </Helmet>
            <div className="flex flex-col m-auto">
                <img src={pendidikan} alt="tut wuri handayani" className="w-1/4 m-auto mt-3 tablet:w-40" />
                <h1 className="text-center font-lato font-semibold text-2xl">Sekolah Dasar Internasional Bangka</h1>
                <h1 className="text-center mt-10 mb-2 font-lato font-bold text-slate-900 text-xl">Cek Rapor anda dibawah ini</h1>
                <form>
                    <div className="flex flex-col">
                        <input type="number" className="w-9/12 h-9 border-2 pl-3 border-slate-200 bg-gray-50 rounded-md m-auto focus:outline-blue-500 drop-shadow-lg tablet:w-4/6 laptop:w-2/4" placeholder="Masukkan nomor NISN anda disini" />
                        <button className="font-lato w-9/12 h-9 m-auto mt-3 font-semibold rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-150 tablet:w-4/6  laptop:w-2/4">Cek NISN</button>
                    </div>
                </form>
            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default CekRapor