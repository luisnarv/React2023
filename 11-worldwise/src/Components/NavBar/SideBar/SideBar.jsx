import AppNavBar from "../AppNav/AppNavBar";
import Footer from "../../Footer/Footer";
import Logo from "../Logo/Logo";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNavBar />
      <p>List of cities</p>
      <Footer />
    </div>
  );
}
