"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import styles from "./style.module.scss";

const AboutBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={cn(styles.aboutBanner, theme ? styles.aboutBannerDark : "")}
    >
      <div className={cn("header-container", "full")}>
        <div className={cn("primary-container")}>
          <h1
            className={cn(styles.bannerTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props[0]?.title}` }}
          ></h1>
        </div>
      </div>

      <div className={styles.bannerImg}>
        <ImageCustom
          src={
            props[0]?.image?.data?.attributes?.url
              ? `${base_Uri}${props[0]?.image?.data?.attributes?.url}`
              : `${base_Uri}/`
          }
          width={2560}
          height={1068}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
