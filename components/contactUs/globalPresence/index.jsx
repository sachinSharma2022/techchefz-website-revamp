"use client";

import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

import TextRevel from "@/components/ui/sectionAnimation";

const GlobalPresence = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const locations = [
    {
      locationName: "San Francisco",
    },
    {
      locationName: "London",
    },
    {
      locationName: isMobileScreen ? "India" : "New Delhi",
    },
    {
      locationName: "Pune",
    },
    {
      locationName: "Dubai",
    },
  ];

  return (
    <section
      className={`${styles.globalPresenceStyle} ${
        theme ? styles.globalPresenceBannerDark : ""
      }`}
    >
      <div className={styles.globalStackBox}>
        <TextRevel>
          <div className={cn("primary-container", styles.globalRow)}>
            <h2
              className={cn(styles.globalHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h2>
            <p
              className={cn(styles.globalText, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></p>
          </div>
        </TextRevel>
        <div className={styles.popoverContainer}>
          <div className={styles.contactMap}>
            {theme ? (
              <ImageCustom
                src="/images/map/dark.gif"
                width={2000}
                height={2000}
                alt="map"
                className={styles.mapImage}
              />
            ) : (
              <ImageCustom
                src="/images/map/light.gif"
                width={2000}
                height={2000}
                alt="map"
                className={styles.mapImage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
