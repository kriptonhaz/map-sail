import React from "react"
import { Box, Typography } from "@mui/material"
import classes from "./Auth.module.scss"
import imgAppPreview from "@/assets/app-preview.jpg"
import imgLogo from "@/assets/logo.png"
import imgBgPattern from "@/assets/bg-login-pattern.svg"

const LeftColumn: React.FC = () => {
  return (
    <Box className={classes.LeftColumn}>
      <Box className={classes.Pattern} sx={{ backgroundImage: `url(${imgBgPattern})` }}></Box>
      <Box className={classes.Content}>
        <Box className={classes.Title}>
          <img src={imgLogo} alt="mantraocean logo" />
          <Typography variant="h5" fontWeight={"semiBold"}>
            Mantraocean
          </Typography>
        </Box>
        <img src={imgAppPreview} className={classes.ImgPreview} />
        <Box>
          <Typography variant="h6" fontWeight={"semiBold"} mb={4}>
            All ships information in one tap
          </Typography>
          <Typography color={"#A1A9C4"} sx={{ width: "100%", maxWidth: "380px" }}>
            Live Ships Map. Discover information and vessel positions for vessels around the world
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default LeftColumn
