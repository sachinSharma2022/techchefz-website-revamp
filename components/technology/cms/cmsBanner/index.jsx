"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const CmsBanner = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.cmsBannerStyle} ${
        theme ? styles.cmsBannerDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <h1 className={styles.title}>
          Unleashing Potential <br /> with Cutting-Edge <br />
          <span className={styles.titleHighlight}>CMS Solutions.</span>
        </h1>

        <p className={styles.leadText}>
          We&apos;re a worldwide presence, serving clients on four continents.
          Our international expertise ensures innovative solutions tailored to
          diverse global needs.
        </p>
      </div>
    </section>
  );
};

export default CmsBanner;
