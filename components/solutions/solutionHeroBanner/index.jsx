"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";


import styles from "./style.module.scss";

const SolutionHeroBanner = ({props}) => {
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
              {/* <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}></h1> */}


          <p className={styles.leadText}>
          {props?.Description}
          </p>
        </div>
      </div>

      <div className={styles.landingPlayerStyle}>
      <ImageCustom
          src={`${base_Uri}${props?.Image.data.attributes.url}`}
          width={1440}
          height={650}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default SolutionHeroBanner;
