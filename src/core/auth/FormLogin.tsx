import React from "react";
import { Button, Stack, Box, Typography, InputAdornment } from "@mui/material";
import classes from "./Auth.module.scss";
import InputGroup from "@/components/InputGroup";
import Checkbox from "@/components/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import IconGoogle from "@/assets/icon-google.png";
import IconFacebook from "@/assets/icon-facebook.svg";
import IconApple from "@/assets/icon-apple.svg";
import { info } from "@/themes/ts/colors";
import FeatherIcon from "@/components/FeatherIcon";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAuthLogin } from "@/interfaces/auth.interfaces";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
});

const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IAuthLogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin: SubmitHandler<IAuthLogin> = (data) => {
    if (data.email === "admin@mantramaker.co" && data.password === "12345678") {
      navigate("/dashboard/live-map");
    } else {
      setError("email", { type: "custom", message: "You are not authorized" });
    }
  };

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
      <form onSubmit={handleSubmit(onLogin)}>
        <Box mt={4}>
          <InputGroup
            {...register("email")}
            startAdornment={
              <InputAdornment position="start">
                <FeatherIcon icon="mail" />
              </InputAdornment>
            }
            placeholder="Enter your email or username"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <InputGroup
            {...register("password")}
            startAdornment={
              <InputAdornment position="start">
                <FeatherIcon icon="lock" />
              </InputAdornment>
            }
            placeholder="Enter your password"
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            type="password"
          />
          <Stack
            sx={{ mt: 2, mb: 6 }}
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Checkbox className={classes.RememberMe} label="Remember Me" />
            <Link to="#">
              <Typography variant="body2">Forgot Password</Typography>
            </Link>
          </Stack>
          <Button fullWidth type="submit">
            Sign In
          </Button>
        </Box>
      </form>
      <Box className={classes.Divider}>
        <span></span>
        <Typography>or</Typography>
      </Box>
      <Box className={classes.SSO}>
        <Button
          className={classes.BtnGoogle}
          fullWidth
          startIcon={<img src={IconGoogle} />}
        >
          Continue with Google
        </Button>
        <Button
          className={classes.BtnFacebook}
          fullWidth
          startIcon={<img src={IconFacebook} />}
        >
          Continue with Facebook
        </Button>
        <Button
          className={classes.BtnApple}
          fullWidth
          startIcon={<img src={IconApple} />}
        >
          Continue with Apple
        </Button>
      </Box>
    </Box>
  );
};

export default FormLogin;
