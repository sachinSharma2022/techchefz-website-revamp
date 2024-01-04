import React from "react";
import styles from "./style.module.scss";

const CmsBanner = () => {
  return (
    <section className={`${styles.cmsBannerStyle}`}>
      <h1 className={styles.title}>
        Unleashing Potential with Cutting-Edge
        <span className={styles.titleHighlight}>CMS Solutions.</span>
      </h1>

      <p className={styles.leadText}>
        We're a worldwide presence, serving clients on four continents. Our
        international expertise ensures innovative solutions tailored to diverse
        global needs.
      </p>
    </section>
  );
};

export default CmsBanner;
