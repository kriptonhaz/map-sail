import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import VesselPage from "./pages/dashboard/vessel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/vessel" element={<VesselPage />} />
      </Routes>
    </>
  );
}

export default App;
