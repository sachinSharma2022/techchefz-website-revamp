"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const SolutionHeroBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.solutionHeroBannerStyle} ${
        theme ? styles.solutionHeroBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={cn(styles.contentSection, "header-container")}>
            <h1
              className={cn(styles.title, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h1>

            <p className={styles.leadText}>{props?.Description}</p>
          </div>
        </TextRevel>
      </div>

      <div className={styles.landingPlayerStyle}>
        <ImageCustom
          src={
            props?.Image?.data?.attributes?.url
              ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
              : `${base_Uri}/`
          }
          width={1440}
          height={650}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default SolutionHeroBanner;
