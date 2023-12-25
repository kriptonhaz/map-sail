import Sidebar from "@/components/Sidebar"
import { CircularProgress } from "@mui/material"
import React, { lazy, Suspense } from "react"

const LiveMapScreen = lazy(() => import("@/core/dashboard/map"))

const LiveMapPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Sidebar isFloating isExpand={false} />
      <LiveMapScreen />
    </Suspense>
  )
}

export default LiveMapPage
