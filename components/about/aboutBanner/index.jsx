"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";


import styles from "./style.module.scss";

const AboutBanner = ({props, OurHistory}) => {
  console.log("hh",props);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.aboutBanner} ${theme ? styles.aboutBannerDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.bannerTitle} dangerouslySetInnerHTML={{ __html: `${props[0]?.title}`}}>
        
        </h1>
      </div>

      <div className={styles.bannerImg}>
        <ImageCustom
          src={`${base_Uri}${props[0].image.data.attributes.url}`}
          width={1360}
          height={450}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
