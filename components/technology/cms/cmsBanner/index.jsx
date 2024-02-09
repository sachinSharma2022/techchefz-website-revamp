"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const CmsBanner = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.cmsBannerStyle} ${
        theme ? styles.cmsBannerDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: `${props?.title}`}}>
        </h1>
        <p className={styles.leadText}>
          {props.subtitle}
        </p>
      </div>
    </section>
  );
};

export default CmsBanner;