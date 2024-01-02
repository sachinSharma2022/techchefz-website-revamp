import React from "react";
import styles from "./style.module.scss";

const TechnologyBanner = () => {
   return (
      <section className={`${styles.landingBannerStyle}`}>
         <h1 className={styles.title}>
            Innovating <span className={styles.titleHighlight}>Technology </span> <span className={styles.titleHighlight}> Landscape</span> for the future.
         </h1>

         <p className={styles.leadText}>
            We&apos;re a worldwide presence, serving clients on four continents. Our international expertise ensures innovative solutions tailored to
            diverse global needs.
         </p>
      </section>
   );
};

export default TechnologyBanner;
