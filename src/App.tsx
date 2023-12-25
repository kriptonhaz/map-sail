import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login"
import VesselPage from "./pages/dashboard/vessel"
import classes from "./themes/scss/global.module.scss"
import { Box } from "@mui/material"
import DatabasePage from "./pages/dashboard/database"
import LiveMapPage from "./pages/dashboard/live-map"

function App() {
  return (
    <Box className={classes.Root}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/vessel" element={<VesselPage />} />
        <Route path="/dashboard/database" element={<DatabasePage />} />
        <Route path="/dashboard/live-map" element={<LiveMapPage />} />
      </Routes>
    </Box>
  )
}

export default App
