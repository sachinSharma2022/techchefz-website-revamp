"use client";

import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const AboutBanner = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.aboutBanner} ${theme ? styles.aboutBannerDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.bannerTitle}>
          Pioneering Technologies that can <span>Reshape the World</span>
        </h1>
      </div>

      <div className={styles.bannerImg}>
        <ImageCustom
          src="/images/img/about-image.png"
          width={1360}
          height={450}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
