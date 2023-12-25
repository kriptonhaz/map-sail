import React, { useState } from "react"
import classes from "./DetailLocation.module.scss"
import { Box, Card, Stack, Typography } from "@mui/material"
import BoxIcon from "@/components/BoxIcon"
import { Drop } from "iconsax-react"
import iconProgressPointer from "@/assets/icon-progress-pointer.svg"

const DetailLocation: React.FC = () => {
  const [currentProgress, setCurrentProgress] = useState(40)

  return (
    <Card className={classes.Container} sx={{ top: "5%", left: "50%" }}>
      <Box className={classes.Header}>
        <BoxIcon icon={<Drop />} color="danger" />
        <img
          className="country"
          style={{ width: "52px", filter: "drop-shadow(0px 0px 0.5px #000)" }}
          src="https://flagsapi.com/ID/flat/64.png"
        />
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={"bold"} lineHeight={"100%"} mt={1}>
            NAVIOS MERIDIAN NUMERO UNOS
          </Typography>
          <Typography fontWeight={"bold"} variant="caption" color="text.secondary">
            CRUD OIL TANKER
          </Typography>
        </Box>
      </Box>
      <Box className={classes.Thumbnail}>
        <Box
          className={classes.Image}
          sx={{
            background: `url(https://media.cntraveler.com/photos/64ee0d3dfc1c4bfeb07d7276/4:3/w_2624,h_1968,c_limit/Disney%20Treasure%20-%20Exterior%202.jpg)`,
          }}
        ></Box>
        <Typography className={classes.Description}>
          Received : <b>6 minutes ago</b> (AIS Source : <b>MALAGA AGP</b>)
        </Typography>
      </Box>
      <Box className={classes.Progress}>
        <span></span>
        <Box className={classes.ProgressTrack}>
          <span className={classes.CurrentProgress} style={{ width: `${currentProgress}%` }}></span>
          <img
            src={iconProgressPointer}
            className={classes.ProgressThumb}
            style={{ left: `${(88 / 100) * currentProgress}%` }}
          />
        </Box>
      </Box>
      <Box className={classes.DataJourney}>
        <Box sx={{ flex: 1 }}>
          <Typography mb={2}>
            FR <b>MRS</b>
          </Typography>
          <Box className={classes.Box}>
            <Typography fontWeight={"bold"}>ETD</Typography>
            <Typography>2023-12-04 19:51</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography mb={2}>
            MA <b>PTM</b>
          </Typography>
          <Box className={classes.Box}>
            <Typography fontWeight={"bold"}>ETA</Typography>
            <Typography>2023-12-06 12:45</Typography>
          </Box>
        </Box>
      </Box>

      <Stack direction={"column"} spacing={3}>
        <Box>
          <Typography className={classes.Label}>Latitude</Typography>
          <Typography className={classes.Value}>565,86868</Typography>
        </Box>
        <Box>
          <Typography className={classes.Label}>Longitude</Typography>
          <Typography className={classes.Value}>45,5645JH645</Typography>
        </Box>
        <Box>
          <Typography className={classes.Label}>Navigational Status</Typography>
          <Typography className={classes.Value}>Underway Using Engine</Typography>
        </Box>
        <Box>
          <Typography className={classes.Label}>Speed / Course</Typography>
          <Typography className={classes.Value}>16.4KN / 261 °</Typography>
        </Box>
        <Box>
          <Typography className={classes.Label}>Draught</Typography>
          <Typography className={classes.Value}>6.1M</Typography>
        </Box>
        <Box>
          <Typography className={classes.Label}>Heading</Typography>
          <Typography className={classes.Value}>98 °</Typography>
        </Box>
      </Stack>
    </Card>
  )
}

export default DetailLocation
