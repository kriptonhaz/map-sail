import React from "react"
import { Button, Stack, Box, Typography, InputAdornment } from "@mui/material"
import classes from "./Auth.module.scss"
import InputGroup from "@/components/InputGroup"
import Checkbox from "@/components/Checkbox"
import { Link } from "react-router-dom"
import IconGoogle from "@/assets/icon-google.png"
import IconFacebook from "@/assets/icon-facebook.svg"
import IconApple from "@/assets/icon-apple.svg"
import { info } from "@/themes/ts/colors"
import FeatherIcon from "@/components/FeatherIcon"

const FormLogin: React.FC = () => {
  return (
    <Box className={classes.Form}>
      <Box>
        <Typography variant="h6" fontWeight={"semiBold"} mb={2}>
          Welcome Back, Sailorman!
        </Typography>
        <Typography color={info[600]} fontWeight={"medium"}>
          Sign in with your account
        </Typography>
      </Box>
      <Box mt={4}>
        <InputGroup
          startAdornment={
            <InputAdornment position="start">
              <FeatherIcon icon="mail" />
            </InputAdornment>
          }
          placeholder="Enter your email or username"
        />
        <InputGroup
          startAdornment={
            <InputAdornment position="start">
              <FeatherIcon icon="lock" />
            </InputAdornment>
          }
          placeholder="Enter your password"
        />
        <Stack sx={{ mt: 2, mb: 6 }} direction="row" justifyContent={"space-between"} alignItems={"center"}>
          <Checkbox className={classes.RememberMe} label="Remember Me" />
          <Link to="#">
            <Typography variant="body2">Forgot Password</Typography>
          </Link>
        </Stack>
        <Button fullWidth>Sign In</Button>
      </Box>
      <Box className={classes.Divider}>
        <span></span>
        <Typography>or</Typography>
      </Box>
      <Box className={classes.SSO}>
        <Button className={classes.BtnGoogle} fullWidth startIcon={<img src={IconGoogle} />}>
          Continue with Google
        </Button>
        <Button className={classes.BtnFacebook} fullWidth startIcon={<img src={IconFacebook} />}>
          Continue with Facebook
        </Button>
        <Button className={classes.BtnApple} fullWidth startIcon={<img src={IconApple} />}>
          Continue with Apple
        </Button>
      </Box>
    </Box>
  )
}

export default FormLogin
