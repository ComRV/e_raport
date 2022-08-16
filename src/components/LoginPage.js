import { Helmet } from 'react-helmet'
import pendidikan from '../img/pendidikan.png'

const loginPage = () => {
    return (
        <div className="container bg-login-pattern w-mobile h-screen m-auto">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <img src={pendidikan} alt="tut wuri handayani" className='m-auto mb-8 w-1/4 relative top-5' />
            <h1 className='text-center font-lato font-semibold text-xl'>Selamat Datang di E-Rapor SD Internasional Bangka</h1>
            <form className='mt-8'>
                <div className='flex flex-col'>
                    <label className='font-rubik ml-7'>Username</label>
                    <input type="text" className='w-11/12 m-auto h-9 font-lato pl-3 mt-2 mb-2 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg' placeholder='Username' />
                </div>

                <div className='flex flex-col'>
                    <label className='font-rubik ml-7 '>Password</label>
                    <input type="password" className='w-11/12 text-sm m-auto h-9 font-lato pl-3 mt-2 mb-2 border-2 border-slate-200 bg-gray-50 rounded-md focus:outline-blue-500 drop-shadow-lg placeholder:text-base' placeholder='Password' />
                </div>
                <div className='flex flex-col'>
                    <button className='bg-blue-500 w-11/12 h-9 rounded-md mt-3 ml-5 hover:bg-blue-600 active:bg-blue-700 duration-150 font-lato font-semibold text-gray-200 tracking-wider'>LOGIN</button>
                </div>
            </form>
            <footer className="flex justify-center items-center font-lato text-xs absolute bottom-0 w-mobile">© 2022 Copyright: Rizky Duika</footer>
        </div>
    )
}

export default loginPage