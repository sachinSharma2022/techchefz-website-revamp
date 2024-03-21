"use client";

import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Popover } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

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
      locationName: "New Delhi",
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
            {/* <ImageCustom
                src={
                  props?.Image?.data?.attributes?.url
                    ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                width={1000}
                height={1000}
                alt="map"
              /> */}

            <ImageCustom
              src="/images/img/map.svg"
              width={1000}
              height={1000}
              alt="map"
              className={styles.mapImage}
            />

            <div className={styles.locationSection}>
              {locations.map((item, index) => (
                <div key={index} className={styles.dotSec}>
                  <div className={styles.locationDot}></div>
                  <div className={styles.locationName}>{item.locationName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
