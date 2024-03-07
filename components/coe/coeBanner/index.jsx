"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { base_Uri } from "@/lib/constants";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const CoeBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={cn(styles.banner, theme ? styles.bannerDark : "")}>
      <TextRevel>
        <div className={cn(styles.bannerContent, "header-container")}>
          <div className="primary-container grid-col-2">
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
      </TextRevel>

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
