import Sidebar from "@/components/Sidebar"
import { neutral } from "@/themes/ts/colors"
import { spacing } from "@/themes/ts/spacing"
import { Box, CircularProgress, SxProps } from "@mui/material"
import React, { lazy, Suspense } from "react"

const DatabaseScreen = lazy(() => import("@/core/dashboard/database"))

const styles: { container: SxProps; content: SxProps } = {
  container: {
    background: neutral[100],
    width: "100vw",
    minHeight: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: `${spacing[5]}px`,
  },
  content: {
    flex: "1",
    padding: `${spacing[8]}px ${spacing[6]}px`,
    maxWidth: "calc(100% - 240px)",
  },
}

const DatabasePage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Box sx={styles.container}>
        <Sidebar />
        <Box sx={styles.content}>
          <DatabaseScreen />
        </Box>
      </Box>
    </Suspense>
  )
}

export default DatabasePage
