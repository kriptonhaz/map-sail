import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import BlueShipIcon from "../../assets/cursor/passanger-icon.svg";

type ShipPositionType = {
  packetType: string;
  channel: string;
  userId: string;
  position: LatLngExpression;
  navigationStatus: string;
};

type RenderMapProps = {
  zoom: number;
};

export const RenderMap = (props: RenderMapProps) => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [position, setPosition] = useState<LatLngExpression>([
    -6.125443, 106.819634,
  ]);
  const marker = useRef<L.Marker[]>([]);
  const shipPosition: ShipPositionType[] = [
    {
      packetType: "AIVDM",
      channel: "A",
      userId: "220193000",
      position: [-5.929687, 106.768561],
      navigationStatus: "Under way using engine",
    },
    {
      packetType: "AIVDM",
      channel: "B",
      userId: "129193000",
      position: [-6.075288837859827, 106.8387856018099],
      navigationStatus: "Under way using engine",
    },
    {
      packetType: "AIVDM",
      channel: "A",
      userId: "124393000",
      position: [-6.013671149772505, 106.95943383078084],
      navigationStatus: "Under way using engine",
    },
  ];
  const zoom = 10;

  const getMarkerIcon = () => {
    return L.icon({
      iconUrl: BlueShipIcon,
      iconSize: L.point(30, 45),
    });
  };

  useEffect(() => {
    if (map) {
      map.setView(position, props.zoom);
    }
  }, [props.zoom, map]);

  const onMove = useCallback(() => {
    if (map) {
      setPosition(map.getCenter());
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      map.on("move", onMove);
    }
    return () => {
      if (map) {
        map.off("move", onMove);
      }
    };
  }, [map, onMove]);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={position}
        zoom={props.zoom}
        scrollWheelZoom={false}
        ref={setMap}
        zoomControl={false}
        style={{ width: "100vw", height: "100vh", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shipPosition.map((item, index) => (
          <Marker
            position={item.position}
            icon={getMarkerIcon()}
            // @ts-ignore
            ref={(ar) => (marker.current[index] = ar)}
            key={item.userId}
          >
            <Popup>
              Packet Type: {item.packetType}
              <br />
              Channel: {item.channel}
              <br />
              User ID: {item.userId}
              <br />
              Navigation Status: {item.navigationStatus}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    ),
    []
  );

  return <div>{displayMap}</div>;
};
