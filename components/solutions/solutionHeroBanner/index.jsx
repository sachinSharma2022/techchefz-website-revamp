import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const SolutionHeroBanner = () => {
  return (
    <section className={`${styles.solutionHeroBannerStyle}`}>
      <div className={styles.contentSection}>
        <h1 className={styles.title}>
          Your most trusted{" "}
          <span className={styles.titleHighlight}>Technology</span> Company.
        </h1>

        <p className={styles.leadText}>
          We assist businesses by transforming their goals, teams, and cultures
          with digital technology to make them colinear with the digital age.
          Through digitalization, organizations can facilitate advanced
          decision-making and management.
        </p>
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
