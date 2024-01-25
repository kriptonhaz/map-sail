import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import BlueShipIcon from "../../assets/cursor/passanger-icon.svg";
import { IShipData } from "@/interfaces/ais.interface";
import "leaflet-rotatedmarker";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// import classes from "./style.module.scss";
import BoxIcon from "../BoxIcon";
import { Drop } from "iconsax-react";
import ShipPlaceholder from "@/assets/ship-placeholder.jpeg";

type RenderMapProps = {
  map: L.Map | null;
  setMap: (map: L.Map | null) => void;
  zoom: number;
  shipData?: IShipData[];
  selectShip?: (shipId: string) => void;
};

export const RenderMap = (props: RenderMapProps) => {
  const [position, setPosition] = useState<LatLngExpression>([
    -6.125443, 106.819634,
  ]);
  const marker = useRef<L.Marker[]>([]);

  const getMarkerIcon = () => {
    return L.icon({
      iconUrl: BlueShipIcon,
      iconSize: L.point(20, 20),
      iconAnchor: [10, 10],
    });
  };

  useEffect(() => {
    if (props.map) {
      props.map.setView(position, props.zoom);
    }
  }, [props.zoom, props.map]);

  const onMove = useCallback(() => {
    if (props.map) {
      setPosition(props.map.getCenter());
    }
  }, [props.map]);

  useEffect(() => {
    if (props.map) {
      props.map.on("move", onMove);
    }
    return () => {
      if (props.map) {
        props.map.off("move", onMove);
      }
    };
  }, [props.map, onMove]);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={position}
        zoom={props.zoom}
        scrollWheelZoom={true}
        ref={props.setMap}
        zoomControl={true}
        style={{ width: "100vw", height: "100vh", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.shipData &&
          props.shipData.map((item, index) => {
            return (
              <Marker
                position={[item.Latitude, item.Longitude]}
                icon={getMarkerIcon()}
                // @ts-ignore
                ref={(ar) => (marker.current[index] = ar)}
                title={item.Uuid}
                key={item.UserID}
                eventHandlers={{
                  click: (e) => {
                    if (props.selectShip) {
                      props.selectShip(e.target.options.title);
                    }
                  },
                }}
                // @ts-ignore
                rotationAngle={item.Cog}
              >
                {/* TODO: need to fix the styling */}
                {/* <Popup className={classes.Popup}>
                  <Card className={classes.Container}>
                    <Box className={classes.Header}>
                      <BoxIcon icon={<Drop />} color="danger" />
                      <img
                        className="country"
                        style={{
                          width: "52px",
                          filter: "drop-shadow(0px 0px 0.5px #000)",
                        }}
                        src="https://flagsapi.com/ID/flat/64.png"
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          fontWeight={"bold"}
                          lineHeight={"100%"}
                          mt={1}
                        >
                          {item.Name === "" ? "N/A" : item.Name}
                        </Typography>
                        <Typography
                          fontWeight={"bold"}
                          variant="caption"
                          color="text.secondary"
                        >
                          IMO: {item?.ImoNumber === 0 ? "N/A" : item?.ImoNumber}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.Thumbnail}>
                      <img
                        className="Image"
                        style={{
                          width: "100%",
                          height: undefined,
                          aspectRatio: 11 / 6,
                        }}
                        src={ShipPlaceholder}
                      />
                    </Box>
                  </Card>
                </Popup> */}
              </Marker>
            );
          })}
      </MapContainer>
    ),
    [props.shipData]
  );

  return <div>{displayMap}</div>;
};
