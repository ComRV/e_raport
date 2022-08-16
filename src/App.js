import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CekRapor from "./components/CekRapor"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cekRapor" element={<CekRapor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
