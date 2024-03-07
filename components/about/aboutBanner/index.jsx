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
      <div className={cn("primary-container", "header-full-container")}>
        <h1
          className={cn(styles.bannerTitle, "gradient-text")}
          dangerouslySetInnerHTML={{ __html: `${props[0]?.title}` }}
        ></h1>
      </div>

      <div className={styles.bannerImg}>
        <ImageCustom
          src={
            props[0]?.image?.data?.attributes?.url
              ? `${base_Uri}${props[0]?.image?.data?.attributes?.url}`
              : `${base_Uri}/`
          }
          width={1360}
          height={450}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
