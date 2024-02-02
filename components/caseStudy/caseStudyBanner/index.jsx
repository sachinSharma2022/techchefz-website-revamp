"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";

const CaseStudyBanner = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.caseStudyBanner} ${
        theme ? styles.caseStudyDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.bannerTitle} dangerouslySetInnerHTML={{ __html: `${props?.title}` }}>

        </h1>
      </div>
      <div className={styles.bannerImg}>
        <ImageCustom
          src={`${base_Uri}${props.image.data.attributes.url}`}
          width={1360}
          height={500}
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default CaseStudyBanner;
