import React from "react";
import styles from "./style.module.scss";

const LandingBanner = () => {
  return (
    <section className={`${styles.landingBannerStyle}`}>
      <div className={styles.gridCol}>
        
          <h1 className={styles.title}>
            Discover How We
            <span className={styles.titleHighlight}>Innovate</span>
            Through Our Case Studies
          </h1>
       
       
          <p className={styles.leadText}>
            We're a worldwide presence, serving clients on four continents. Our
            international expertise ensures innovative solutions tailored to
            diverse global needs.
          </p>
        
      </div>
    </section>
  );
};

export default LandingBanner;
