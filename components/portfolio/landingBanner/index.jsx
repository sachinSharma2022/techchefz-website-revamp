"use client";

import React, { useContext } from "react";
import { MyContext } from "@/context/theme";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const LandingBanner = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section className={!theme ? styles.landingBannerStyle : styles.darkMode}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <h1 className={styles.title}>
          Discover How We
          <span className={styles.titleHighlight}>Innovate</span>
          Through Our Case Studies
        </h1>

        <p className={styles.leadText}>
          {props[0]?.subtitle}
        </p>
      </div>
    </section>
  );
};

export default LandingBanner;
