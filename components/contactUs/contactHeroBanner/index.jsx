"use client";

import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import TextRevel from "@/components/ui/sectionAnimation";

const ContactHeroBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.contactHeroBannerStyle} ${
        theme ? styles.contactHeroBannerDark : ""
      }`}
    >
      <TextRevel>
        <div className={cn(styles.contentSection, "header-container")}>
          <div className="primary-container">
            <h1
              className={cn(styles.title, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.title}` }}
            ></h1>
          </div>
        </div>
      </TextRevel>

      <div className={styles.landingPlayerStyle}>
        <ImageCustom
          src={
            props?.image?.data?.attributes?.url
              ? `${base_Uri}${props?.image?.data?.attributes?.url}`
              : `${base_Uri}/`
          }
          width={2560}
          height={1068}
          alt="contactBannerImg"
        />
      </div>
    </section>
  );
};

export default ContactHeroBanner;
