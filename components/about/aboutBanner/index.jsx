"use client";

import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

const AboutBanner = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.aboutBanner} ${theme ? styles.aboutBannerDark : ""}`}
    >
      <h1 className={styles.bannerTitle}>
        Pioneering Technologies that can <span>Reshape the World</span>
      </h1>

      <div className={styles.bannerImg}>
        <ImageCustom
          src="/images/img/about-bg2.png"
          width={1360}
          height={450}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
