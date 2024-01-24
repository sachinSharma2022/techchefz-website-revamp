"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const SolutionHeroBanner = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.solutionHeroBannerStyle} ${
        theme ? styles.solutionHeroBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            Your most trusted <br />
            <span className={styles.titleHighlight}>Technology</span> Company.
          </h1>

          <p className={styles.leadText}>
            We assist businesses by transforming their goals, teams, and
            cultures with digital technology to make them colinear with the
            digital age. Through digitalization, organizations can facilitate
            advanced decision-making and management.
          </p>
        </div>
      </div>

      <div className={styles.landingPlayerStyle}>
        <ImageCustom
          src="/images/hero-solution.webp"
          width={1440}
          height={650}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default SolutionHeroBanner;
