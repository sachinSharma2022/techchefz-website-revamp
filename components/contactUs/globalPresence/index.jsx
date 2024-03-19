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
              src="/img/map.svg"
              width={1000}
              height={1000}
              alt="map"
            />
          </div>
        </div>
      </div>

      {isMobileScreen && (
        <div className={styles.popoverCardMobile}>
          {props?.DescriptionInner?.map((data, index) => (
            <div key={index} className={styles.locationPopoverCard}>
              <div className={styles.popoverMapIcon}>
                <ImageCustom
                  src={
                    data?.Images?.data?.attributes?.url
                      ? `${base_Uri}${data?.Images?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={40}
                  height={26}
                  alt="flag-img"
                />
              </div>
              <h1 className={styles.locationHeading}>{data.Title}</h1>
              <p className={styles.locationAreaText}>{data.Description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GlobalPresence;
