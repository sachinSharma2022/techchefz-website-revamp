"use client";

import React from "react";
import { Button } from "../../ui/button";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";

const LandingBanner = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.landingBannerStyle} ${
        theme ? styles.landingBannerDark : ""
      }`}
    >
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
