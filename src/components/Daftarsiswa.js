import { Helmet } from "react-helmet"
import { Navbar, Rightnav } from "./NavigationBar"


const Daftarsiswa = () => {
    return (
        <div className="container min-w-full grid grid-row-3 grid-flow-col gap-4 bg-login-pattern h-screen">
            <Helmet><title>Daftar Siswa</title></Helmet>
            <div className="absolute bg-gray-200 w-screen h-10"></div>
            <Navbar route="daftarsiswa" />
            <Rightnav />
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-screen">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default Daftarsiswa