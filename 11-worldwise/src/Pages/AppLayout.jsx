import Map from "../Components/Map/Map";
import SideBar from "../Components/NavBar/SideBar/SideBar";
import styles from "./styles/AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}
