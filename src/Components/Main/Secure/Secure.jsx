import styles from "./secure.module.css";
import illustration from "../../../assets/images/illustration-intro.png";
import accesesAnywhere from "../../../assets/images/icon-access-anywhere.svg";
import security from "../../../assets/images/icon-security.svg";
import collaboration from "../../../assets/images/icon-collaboration.svg";
import fileTypes from "../../../assets/images/icon-any-file.svg";

export default function Secure() {
  return (
    <>
      <section className={styles.secure}>
        <div className={styles.secure__content}>
          <img src={illustration} alt="Stay productive" />
          <h2> All your files in one secure location, accessible anywhere.</h2>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className={styles.secure__button} type="button">Get Started</button>
        </div>
        
        <div className={styles.container__secure}>
          <div className={styles.secure__features}>
            <img src={accesesAnywhere} alt="Access anywhere" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          <div className={styles.secure__features}>
            <img src={security} alt="Security you can trust" />
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>

          <div className={styles.secure__features}>
            <img src={collaboration} alt="Real-time collaboration" />
            <h3> Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          <div className={styles.secure__features}>
            <img src={fileTypes} alt="Store any type of file" />
            <h3> Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
