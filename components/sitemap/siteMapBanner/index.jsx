"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

function SitMapBanner() {
  const { theme } = useContext(MyContext);
  return (
    <section
      className={`${styles.siteMapBanner} ${
        theme ? styles.siteMapBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.sitemap}>
          <h1 className={styles.bannerHeading}>Sitemap</h1>
          <p className={styles.bannerText}>
            Technology-driven solutions are becoming the norm in our industry.
            More than ever, customers expect us to assess and adopt innovation
            to.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SitMapBanner;
