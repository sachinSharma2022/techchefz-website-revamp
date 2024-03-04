"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const CaseStudyBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.caseStudyBanner} ${
        theme ? styles.caseStudyDark : ""
      }`}
    >
      <TextRevel>
      <div className={cn("primary-container", "header-full-container")}>
        <h1
          className={cn(styles.bannerTitle, "gradient-text")}
          dangerouslySetInnerHTML={{ __html: `${props?.CaseStudyTitle}` }}
        ></h1>
      </div>
      </TextRevel>
      
      {props?.CaseStudyImage?.data?.attributes?.url !== undefined &&
        props?.CaseStudyImage?.data?.attributes?.url !== "" && (
          <div className={styles.bannerImg}>
            <ImageCustom
              src={
                props?.CaseStudyImage?.data?.attributes?.url
                  ? `${base_Uri}${props?.CaseStudyImage?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={1360}
              height={500}
              alt="banner-img"
            />
          </div>
        )}
    </section>
  );
};

export default CaseStudyBanner;
