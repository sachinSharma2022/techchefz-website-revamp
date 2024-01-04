import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";

const LandingBanner = () => {
  return (
    <section className={`${styles.landingBannerStyle}`}>
      <h1 className={styles.title}>
        Humanizing <div /> Digital Experience <div />
        <div className={styles.titleHighlight} id={styles.flip}>
          <div>
            <div className={styles.rollingTitle}>Through Data</div>
          </div>
          <div>
            <div className={styles.rollingTitle}>abcdfds</div>
          </div>
          <div>
            <div className={styles.rollingTitle}>Through Technology</div>
          </div>
        </div>
      </h1>

      <Button variant="blueBtn" size="md" className={styles.buttonContent}>
        Let’s Work Together <Icons.ArrowRight size={18} />
      </Button>
    </section>
  );
};

export default LandingBanner;
