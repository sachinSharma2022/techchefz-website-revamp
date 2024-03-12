"use client";

import MobileSlider from "@/components/common/mobileSlider";
import { ImageCustom } from "@/components/ui/imageCustom";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

const WhatWeDo = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isBigScreen = useMediaQuery({ query: "(min-width: 48rem)" });

  return (
    <section
      className={`${styles.whatWeDo} ${theme ? styles.whatWeDoDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={cn(styles.flexContainer)}>
            <h6
              className={cn(styles.weDoTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.weDoHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.Description}` }}
            ></h3>
          </div>
        </TextRevel>

        {isBigScreen && (
          <div className={styles.workCardWrapper}>
            {props[0]?.CardComponent?.map((data, index) => (
              <div key={index} className={styles.workCardMain}>
                <div className={styles.workCard}>
                  <div className={`${styles.frontCard} ${styles.workCols}`}>
                    <div className={styles.imgBox}>
                      <ImageCustom
                        height={100}
                        width={100}
                        src={
                          data?.Image?.data?.attributes?.url
                            ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                      />
                    </div>

                    <h3>{data.Title}</h3>
                  </div>
                  <div className={`${styles.backCard}  ${styles.workCols}`}>
                    <h3>{data.Hedding} </h3>
                    <p>{data.Description} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {!isBigScreen && (
        <div className={styles.mobileSlider}>
          <MobileSlider slidesToShow={1.4}>
            {props[0]?.CardComponent?.map((data, index) => (
              <div key={index} className={styles.workCardMain}>
                <div className={styles.workCard}>
                  <div className={`${styles.frontCard} ${styles.workCols}`}>
                    <div className={styles.imgBox}>
                      <ImageCustom
                        height={100}
                        width={100}
                        src={
                          data?.Image?.data?.attributes?.url
                            ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                      />
                    </div>
                    <h3>{data.Title}</h3>
                  </div>
                  <div className={`${styles.backCard}  ${styles.workCols}`}>
                    <h3>{data.Hedding} </h3>
                    <p>{data.Description} </p>
                  </div>
                </div>
              </div>
            ))}
          </MobileSlider>
        </div>
      )}
    </section>
  );
};

export default WhatWeDo;
