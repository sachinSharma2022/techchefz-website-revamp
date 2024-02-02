"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";

const CoeBanner = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.banner} ${theme ? styles.bannerDark : ""}`}>
      <div className="primary-container">
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>
          </h1>

          <div className={styles.bannerRight}>
            <p>
            {props?.Description}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.imgBox}>
        <ImageCustom
          src={`${base_Uri}${props?.Image?.data.attributes.url}`}
          width={1920}
          height={1080}
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default CoeBanner;
