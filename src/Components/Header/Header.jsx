import logo from "../../assets/images/logo.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo Fylo" />
      <nav>
        <ul>
          <li> Features</li>
          <li> Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
}
