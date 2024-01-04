import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

export default function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const lat = params.get("lat");
  const lng = params.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWhelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        >
          <Marker position={mapPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </TileLayer>
      </MapContainer>
    </div>
  );
}
