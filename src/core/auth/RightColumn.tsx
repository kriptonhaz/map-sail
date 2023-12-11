import React from "react"
import { Box, Typography } from "@mui/material"
import FormLogin from "./FormLogin"
import classes from "./Auth.module.scss"
import { Link } from "react-router-dom"

const RightColumn: React.FC = () => {
  return (
    <Box className={classes.RightColumn}>
      <Box></Box>
      <FormLogin />
      <Box>
        <Typography fontWeight={"medium"} color="text.secondary">
          Don'h have an account?{" "}
          <Link to="#">
            <Typography fontWeight={"semiBold"} component="span">
              Sign Up
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default RightColumn
