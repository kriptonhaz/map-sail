import React, { useState } from "react";
import classes from "./DetailLocation.module.scss";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import BoxIcon from "@/components/BoxIcon";
import { Drop, CloseCircle } from "iconsax-react";
import iconProgressPointer from "@/assets/icon-progress-pointer.svg";
import { EtaFormat, IShipData } from "@/interfaces/ais.interface";
import ShipPlaceholder from "@/assets/ship-placeholder.jpeg";

type MarkerDetailProps = {
  shipData?: IShipData;
  onClose?: () => void;
};

const DetailLocation: React.FC<MarkerDetailProps> = (
  props?: MarkerDetailProps
) => {
  const [currentProgress, setCurrentProgress] = useState(30);

  const formatEta = (etaRaw: string | undefined): string => {
    if (etaRaw) {
      const etaParse = JSON.parse(etaRaw) as EtaFormat;
      return `Month: ${etaParse.Month} Day: ${etaParse.Day} Hour: ${etaParse.Hour} Minute: ${etaParse.Minute}`;
    } else {
      return "N/A";
    }
  };

  return (
    <Card className={classes.Container} sx={{ top: "5%", left: "50%" }}>
      <CardHeader
        action={
          <IconButton onClick={props?.onClose}>
            <CloseCircle />
          </IconButton>
        }
        sx={{ position: "absolute", top: 10, right: 10 }}
      />
      <Box className={classes.Header}>
        <BoxIcon icon={<Drop />} color="danger" />
        <img
          className="country"
          style={{ width: "52px", filter: "drop-shadow(0px 0px 0.5px #000)" }}
          src="https://flagsapi.com/ID/flat/64.png"
        />
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={"bold"} lineHeight={"100%"} mt={1}>
            {props?.shipData?.Name === "" ? "N/A" : props?.shipData?.Name}
          </Typography>
          <Typography
            fontWeight={"bold"}
            variant="caption"
            color="text.secondary"
          >
            IMO:{" "}
            {props?.shipData?.ImoNumber === 0
              ? "N/A"
              : props?.shipData?.ImoNumber}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.Thumbnail}>
        <img
          className="Image"
          style={{ width: "100%", height: undefined, aspectRatio: 11 / 6 }}
          src={ShipPlaceholder}
        />
        {/* <Typography className={classes.Description}>
          Received : <b>6 minutes ago</b> (AIS Source : <b>MALAGA AGP</b>)
        </Typography> */}
      </Box>
      {/* <Box className={classes.Progress}>
        <span></span>
        <Box className={classes.ProgressTrack}>
          <span
            className={classes.CurrentProgress}
            style={{ width: `${currentProgress}%` }}
          ></span>
          <img
            src={iconProgressPointer}
            className={classes.ProgressThumb}
            style={{ left: `${(88 / 100) * currentProgress}%` }}
          />
        </Box>
      </Box> */}
      <Box className={classes.DataJourney}>
        <Box sx={{ flex: 1 }}>
          {/* <Typography mb={2}>
            FR <b>MRS</b>
          </Typography> */}
          <Box className={classes.Box}>
            <Typography fontWeight={"bold"}>Destination</Typography>
            <Typography>
              {props?.shipData?.Destination === ""
                ? "N/A"
                : props?.shipData?.Destination}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          {/* <Typography mb={2}>
            MA <b>PTM</b>
          </Typography> */}
          <Box className={classes.Box}>
            <Typography fontWeight={"bold"}>ETA</Typography>
            <Typography>
              {props?.shipData?.Eta === ""
                ? "N/A"
                : formatEta(props?.shipData?.Eta)}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Stack direction={"column"} spacing={3}>
        <Box>
          <Typography className={classes.Label}>Latitude</Typography>
          <Typography className={classes.Value}>
            {props?.shipData?.Latitude}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.Label}>Longitude</Typography>
          <Typography className={classes.Value}>
            {props?.shipData?.Longitude}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.Label}>Heading</Typography>
          <Typography className={classes.Value}>
            {props?.shipData?.Cog} °
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default DetailLocation;
