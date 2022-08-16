import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CekRapor from "./components/CekRapor"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CekRapor />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
