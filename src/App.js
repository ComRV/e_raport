import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import CekRapor from "./components/CekRapor";
import Daftarsiswa from "./components/Daftarsiswa";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CekRapor />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daftarsiswa" element={<Daftarsiswa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
