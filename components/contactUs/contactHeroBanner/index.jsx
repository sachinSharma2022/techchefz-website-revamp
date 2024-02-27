"use client";

import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

const ContactHeroBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.contactHeroBannerStyle} ${
        theme ? styles.contactHeroBannerDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.globalRow)}>
        <div className={styles.contentSection}>
          <h1
            className={cn(styles.title, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.title}` }}
          ></h1>
        </div>
      </div>

      <div className={styles.landingPlayerStyle}>
        <ImageCustom
          src={
            props?.image?.data?.attributes?.url
              ? `${base_Uri}${props?.image?.data?.attributes?.url}`
              : `${base_Uri}/`
          }
          width={1440}
          height={650}
          alt="contactBannerImg"
        />
      </div>
    </section>
  );
};

export default ContactHeroBanner;
