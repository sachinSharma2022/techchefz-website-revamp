import React from "react";
import styles from "./style.module.scss";
import { Button } from "../../ui/button";

const LandingBanner = () => {
  return (
    <section className={`${styles.landingBannerStyle}`}>
      <h1 className={styles.title}>
        Humanizing <br /> Digital Experience <br />
        <span className={styles.titleHighlight}>Through Data.</span>
      </h1>

      <Button variant="blueBtn" size="md">
        Let’s Work Together
      </Button>
    </section>
  );
};

export default LandingBanner;
