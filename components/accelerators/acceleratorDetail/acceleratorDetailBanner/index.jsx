"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const DetailBanner = ({props}) => {
  
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.banner} ${theme ? styles.bannerDark : ""}`}>
      <div className="primary-container">
        <div className={styles.bannerContent}>
          <h1 className={cn(styles.bannerTitle, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>
            
          </h1>
          <div className={styles.bannerRight}>
            <p dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
            </p>
            <Button variant={theme ? "blueBtnDark" : "blueBtn"} className={styles.headerBtn} size="md">
              {props?.Btn} <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imgBox}>
        <ImageCustom
          src={props?.Image?.data?.attributes?.url?`${base_Uri}${props?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
          width={1500}
          height={1500}
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default DetailBanner;
