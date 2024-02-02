"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

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
          src={
            "https://images.unsplash.com/photo-1601933470096-0e34634ffcde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1920}
          height={1080}
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default CoeBanner;
