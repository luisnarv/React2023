import AppNavBar from "../AppNav/AppNavBar";
import Footer from "../../Footer/Footer";
import Logo from "../Logo/Logo";
import styles from "./SideBar.module.css";
import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
