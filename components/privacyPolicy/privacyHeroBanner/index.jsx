"use client";

import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const PrivacyHeroBanner = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.privacyHeroBannerStyle} ${
        theme ? styles.privacyHeroBannerDark : ""
      }`}
    >
      <TextRevel>
      <div className={cn("primary-container")}>
        <h1 className={cn(styles.title,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props[0]?.title}`}}>
          
        </h1>
        <p className={styles.leadText} dangerouslySetInnerHTML={{ __html: `${props[0]?.subtitle}`}}>
        </p>
      </div>
      </TextRevel>
      
    </section>
  );
};

export default PrivacyHeroBanner;
