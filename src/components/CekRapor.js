import { Helmet } from "react-helmet"
import pendidikan from "../img/pendidikan.png"

const CekRapor = () => {
    return (
        <div className="bg-login-pattern w-mobile h-screen m-auto">
            <Helmet>
                <title>Cek Rapor</title>
            </Helmet>
            <div className="flex flex-col m-auto">
                <img src={pendidikan} alt="tut wuri handayani" className="w-1/3 m-auto mt-4" />
                <h1 className="text-center font-lato font-semibold text-2xl">Sekolah Dasar Internasional Bangka</h1>
                <h1 className="text-center mt-10 mb-2 font-nunito-sans font-bold text-slate-900 text-xl">Cek Rapor anda dibawah ini</h1>
                <form>
                    <div className="flex flex-col">
                        <input type="number" className="w-11/12 h-9 border-2 pl-3 border-slate-200 bg-gray-50 rounded-md m-auto focus:outline-blue-500 drop-shadow-lg'" placeholder="Masukkan nomor NISN anda disini" />
                        <button className="font-lato w-11/12 h-9 m-auto mt-3 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-150">Cek NISN</button>
                    </div>
                </form>
            </div>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-mobile">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default CekRapor