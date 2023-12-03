import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { DisplayPosition } from "./DisplayPosition";
import ShipIcon from "../../assets/ship.svg";

type ShipPositionType = {
  packetType: string;
  channel: string;
  userId: string;
  position: LatLngExpression;
  navigationStatus: string;
};

export const ExternalStateExample = () => {
  const [map, setMap] = useState<L.Map | null>(null);
  const marker = useRef<L.Marker[]>([]);
  const center: LatLngExpression = [-6.125443, 106.819634];
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
      iconUrl: ShipIcon,
      iconSize: L.point(30, 45),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateLatLongAutomatically(shipPosition[0], 0);
      updateLatLongAutomatically(shipPosition[1], 1);
      updateLatLongAutomatically(shipPosition[2], 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [map, marker]);

  const updateLatLongAutomatically = (
    ship: ShipPositionType,
    index: number
  ) => {
    let _position = ship.position as number[];
    if (index === 0) {
      _position[0] = _position[0] + 0.00555;
      _position[1] = _position[1] + 0.00555;
    } else if (index === 1) {
      _position[0] = _position[0] + 0.00555;
      _position[1] = _position[1] + 0.00155;
    } else if (index === 2) {
      _position[0] = _position[0] + 0.00555;
      _position[1] = _position[1] - 0.00555;
    }
    marker.current[index].setLatLng(_position as LatLngExpression);
  };

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={setMap}
        style={{ minHeight: "100vh", minWidth: "100vw" }}
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

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
};
