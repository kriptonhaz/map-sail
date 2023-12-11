import { Box } from "@mui/material"
import React from "react"
import classes from "./Auth.module.scss"
import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"

const LoginScreen: React.FC = () => {
  return (
    <Box className={classes.Container}>
      <LeftColumn />
      <RightColumn />
    </Box>
  )
}

export default LoginScreen
