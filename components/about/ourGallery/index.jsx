"use client";
import GridMarqueeGallery from "@/components/common/gridMarqueeGallery";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import styles from "./style.module.scss";

const OurGallery = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.ourGallery} ${theme ? styles.ourGalleryDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h6 className={styles.ourGalleryTitle}>Our Gallery</h6>
          <h3 className={styles.ourGalleryHeading}>From Vision to Reality</h3>
          <p className={styles.ourGalleryText}>
            Our workspace reflects our philosophy: open, collaborative, and
            vibrant. Take a virtual tour of where the magic happens, from
            state-of-the-art labs to cozy brainstorming nooks.
          </p>
        </div>
      </div>

      <GridMarqueeGallery />
    </section>
  );
};

export default OurGallery;
