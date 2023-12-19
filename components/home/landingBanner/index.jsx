import React from "react";
import styles from "./style.module.scss";
import { Button } from "../../ui/button";

const LandingBanner = () => {
  return (
    <div className={styles.landingBannerStyle}>
      <h1 className={styles.title}>
        Humanizing <br /> Digital Experience <br />
        <span className={styles.titleHighlight}>Through Data.</span>
      </h1>

      <Button variant="blueBtn" size="md">
        Let’s Work Together
      </Button>
    </div>
  );
};

export default LandingBanner;
