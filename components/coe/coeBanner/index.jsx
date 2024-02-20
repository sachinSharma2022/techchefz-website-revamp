"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { base_Uri } from "@/lib/constants";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const CoeBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={cn(styles.banner, theme ? styles.bannerDark : "")}>
      <div className="primary-container">
        <div className={cn(styles.bannerContent, "header-container")}>
          <h1
            className={cn(styles.bannerTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h1>

          <div className={styles.bannerRight}>
            <p
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></p>
          </div>
        </div>
      </div>

      <div className={styles.imgBox}>
        <ImageCustom
          src={
            props?.Image?.data?.attributes?.url
              ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
              : `${base_Uri}/`
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
