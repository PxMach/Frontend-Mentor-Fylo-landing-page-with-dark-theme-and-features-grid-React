import React from "react";
import illustration from "../../../assets/images/illustration-stay-productive.png";
import arrow from "../../../assets/images/icon-arrow.svg";
import quotes from "../../../assets/images/bg-quotes.png";
import styles from "./teamProduction.module.css";
import profile1 from "../../../assets/images/profile-1.jpg";
import profile2 from "../../../assets/images/profile-2.jpg";
import profile3 from "../../../assets/images/profile-3.jpg";

export default function TeamProduction() {
  const [showError, setShowError] = React.useState(false);

  function handleSubmit() {
    setShowError(true);
  }

  return (
    <>
      <section className={styles.team_production}>
        <div className={styles.content}>
          <img
            className={styles.illustration}
            src={illustration}
            alt="illustration stay productive"
          />
          <div className={styles.text}>
            <h2> Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className={styles.link}>
              <a href="#"> See how Fylo works</a>
              <a href="#">
                <img src={arrow} alt="Arrow icon" aria-label="Arrow icon" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.testimonials}>
          <img className={styles.quotes} src={quotes} alt="Quotes background" />
          <div className={styles.testimonial}>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className={styles.profile}>
              <img src={profile1} alt="Profile of Satish Patel" />
              <div className={styles.profile_info}>
                <p className={styles.name}>Satish Patel</p>
                <span>Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>

          <div className={styles.testimonial}>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className={styles.profile}>
              <img src={profile2} alt="Profile of Bruce McKenzie" />
              <div className={styles.profile_info}>
                <p className={styles.name}>Bruce McKenzie</p>
                <span>Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>

          <div className={styles.testimonial}>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className={styles.profile}>
              <img src={profile3} alt="Profile of Iva Boyd" />
              <div className={styles.profile_info}>
                <p className={styles.name}>Iva Boyd</p>
                <span> Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.get_started}>
          <h3> Get early access today</h3>
          <p className={styles.text}>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form action="post">
            <div className={styles.input_container}>
              <input type="email" placeholder="email@example.com" />
              {showError && <span>Please enter a valid email address</span>}
            </div>
            <button type="submit" onClick={handleSubmit}>
              Get Started For Free
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
