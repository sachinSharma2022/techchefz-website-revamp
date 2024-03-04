"use client";

import React, { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import Link from "next/link";
import TextRevel from "@/components/ui/sectionAnimation";

const InsightBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={cn(!theme ? styles.landingBannerStyle : styles.darkMode)}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
        <div className={cn(styles.contentSection, "header-container")}>
          <h1
            className={cn(styles.title, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h1>
          <div className={styles.contentRight}>
            <p className={styles.leadText}>{props.SubTitle}</p>
            <Link href={props?.BtnLink}>
              <Button
                variant={theme ? "lightBlueBtn" : "blueBtn"}
                className={styles.headerBtn}
                size="md"
              >
                {props?.Btn}
                <Icons.ArrowRight size={20} className="ms-2" />
              </Button>
            </Link>
          </div>
        </div>
        </TextRevel>
        
      </div>
    </section>
  );
};

export default InsightBanner;
