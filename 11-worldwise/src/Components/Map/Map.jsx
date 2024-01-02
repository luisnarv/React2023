import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const lat = params.get("lat");
  const lng = params.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      City MAP
      <h1>{`lat: ${lat}, lng: ${lng}`}</h1>
    </div>
  );
}
