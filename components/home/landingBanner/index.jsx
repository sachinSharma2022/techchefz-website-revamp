"use client";

import React from "react";
import { Button } from "../../ui/button";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";

const LandingBanner = () => {
  return (
    <section className={styles.landingBannerStyle}>
      <h1 className={styles.title}>
        Humanizing <div /> Digital Experience <div />
        <span className={styles.titleHighlight}>Through Data.</span>
      </h1>

      <Button variant="blueBtn" size="md">
        Let’s Work Together <Icons.ArrowRight size={18} />
      </Button>
    </section>
  );
};

export default LandingBanner;
