"use client";

import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const ContactHeroBanner = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.contactHeroBannerStyle} ${
        theme ? styles.contactHeroBannerDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.globalRow)}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            Let’s discuss about your next
            <span className={styles.titleHighlight}>Digital Campaign.</span>
          </h1>
        </div>
      </div>

      <div className={styles.landingPlayerStyle}>
        <ImageCustom
          src="/images/contact-us-banner.png"
          width={1440}
          height={650}
          alt="contactBannerImg"
        />
      </div>
    </section>
  );
};

export default ContactHeroBanner;
