import logo from "../../assets/images/logo.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo Fylo" />
      <nav>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#sign-in">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
