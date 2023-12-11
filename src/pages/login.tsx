import React, { lazy, Suspense } from "react"
import { CircularProgress } from "@mui/material"

const LoginScreen = lazy(() => import("@/core/auth/login"))

const LoginPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LoginScreen />
    </Suspense>
  )
}

export default LoginPage
