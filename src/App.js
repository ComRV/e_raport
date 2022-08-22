import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import CekRapor from "./components/CekRapor";
import Daftarsiswa from "./components/Daftarsiswa";
import Tambahsiswa from "./components/Tambahsiswa";
import Ubahsiswa from "./components/UbahSiswa";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CekRapor />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daftarsiswa" element={<Daftarsiswa />} />
        <Route path="/daftarsiswa/tambahsiswa" element={<Tambahsiswa />} />
        <Route path="/daftarsiswa/ubahsiswa/:Id" element={<Ubahsiswa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
