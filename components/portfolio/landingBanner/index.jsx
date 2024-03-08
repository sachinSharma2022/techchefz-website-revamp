"use client";

import React, { useContext } from "react";
import { MyContext } from "@/context/theme";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import TextRevel from "@/components/ui/sectionAnimation";

const LandingBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section className={!theme ? styles.landingBannerStyle : styles.darkMode}>
      <TextRevel>
        <div className={cn("header-container")}>
          <div className="primary-container grid-col-2">
            <h1
              className={cn(styles.title, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.title}` }}
            ></h1>

            <p className={styles.leadText}>{props[0]?.subtitle}</p>
          </div>
        </div>
      </TextRevel>
    </section>
  );
};

export default LandingBanner;
