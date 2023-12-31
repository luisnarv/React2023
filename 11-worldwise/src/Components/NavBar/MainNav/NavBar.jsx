import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">PRICING</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            LOG IN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
