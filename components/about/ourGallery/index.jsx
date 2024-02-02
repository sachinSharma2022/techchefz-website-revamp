"use client";
import GridMarqueeGallery from "@/components/common/gridMarqueeGallery";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import styles from "./style.module.scss";

const OurGallery = ({props}) => {
  // console.log("mmmm", props);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.ourGallery} ${theme ? styles.ourGalleryDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h6 className={styles.ourGalleryTitle}>{props[0]?.Title}</h6>
          <h3 className={styles.ourGalleryHeading}>{props[0]?.SubTitle}</h3>
          <p className={styles.ourGalleryText}>
            {props[0]?.Description}
          </p>
        </div>
      </div>

      <GridMarqueeGallery />
    </section>
  );
};

export default OurGallery;
