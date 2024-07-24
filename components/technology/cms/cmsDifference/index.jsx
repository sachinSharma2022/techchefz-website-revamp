"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

import TextRevel from "@/components/ui/sectionAnimation";

const CmsDifference = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.cmsDifferenceStyle} ${
        theme ? styles.cmsDifferenceDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <div>
              <h6
                className={cn(styles.projectHighlight, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
              ></h6>
              <h2
                className={cn(styles.datingText, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
              ></h2>
            </div>
          </div>
        </TextRevel>

        <div className={styles.gridNumberMain}>
          <div className={`${styles.differenceGridCards} `}>
            {props?.TechnologyInner.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.differenceCmsBox}>
                  <h3 className={styles.sbTitle}>{data?.Title}</h3>
                  <p className={styles.sbText}>{data?.Description}</p>
                  <div className={styles.backgroundImg}>
                    <ImageCustom
                      src={
                        data?.Image?.data?.attributes?.url
                          ? `${base_Uri}${data?.Image.data.attributes.url}`
                          : `${base_Uri}/`
                      }
                      width={330}
                      height={162}
                      alt = {data?.Image?.data?.attributes?.alternativeText}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmsDifference;
