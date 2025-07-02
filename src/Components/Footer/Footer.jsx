import logo from "../../assets/images/logo.svg";
import location from "../../assets/images/icon-location.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Fylo logo" />
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <img src={location} alt="Location icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className={styles.footerContact}>
          <p className={styles.footerContactItem}>
            <img src={phone} alt="Phone icon" /> +1-543-123-4567
          </p>
          <p className={styles.footerContactItem}>
            <img src={email} alt="Email icon" /> example@fylo.com
          </p>
        </div>

        <ul className={styles.footerLinks}>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#jobs">Jobs</a>
          </li>
          <li>
            <a href="#press">Press</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <ul className={styles.footerLinks}>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#terms">Terms</a>
          </li>
          <li>
            <a href="#privacy">Privacy</a>
          </li>
        </ul>
        <div className={styles.footerSocial}>
          <i class="devicon-facebook-plain"></i>
          <i class="devicon-twitter-original"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
}
