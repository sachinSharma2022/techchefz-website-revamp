import React from "react";

import styles from "./style.module.scss";

const Streamline = () => {
  return (
    <div className={styles.streamlineWrapper}>
      <section className={styles.streamlineSection}>
        <h3 className={styles.streamlineTitle}>
          Streamline your Business with our <span>Extensive Solution.</span>
        </h3>
        <p className={styles.streamlineContent}>
          We&apos;re a wouldwide presence, serving client on four continents.
          Our internation expertise ensures innovaive solutions tailored to
          diverse global needs
        </p>
      </section>
    </div>
  );
};

export default Streamline;
