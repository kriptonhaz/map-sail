import Sidebar from "@/components/Sidebar"
import { neutral } from "@/themes/ts/colors"
import { spacing } from "@/themes/ts/spacing"
import { Box, CircularProgress, SxProps } from "@mui/material"
import React, { lazy, Suspense } from "react"

const VesselScreen = lazy(() => import("@/core/dashboard/vessel"))

const styles: { container: SxProps; content: SxProps } = {
  container: {
    background: neutral[100],
    width: "100vw",
    minHeight: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    padding: `${spacing[5]}px`,
  },
  content: {
    flex: "1",
    background: "#fff",
    padding: `${spacing[8]}px ${spacing[6]}px`,
  },
}

const VesselPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Box sx={styles.container}>
        <Sidebar />
        <Box sx={styles.content}>
          <VesselScreen />
        </Box>
      </Box>
    </Suspense>
  )
}

export default VesselPage
