"use client";

import MobileSlider from "@/components/common/mobileSlider";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";
import Image from "next/image";
import { base_Uri } from "@/lib/constants";
import { base_Url } from "@/lib/constants";
import { ImageCustom } from "@/components/ui/imageCustom";
const WhatWeDo = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <section
      className={`${styles.whatWeDo} ${theme ? styles.whatWeDoDark : ""}`}
    >
      <div className={cn("primary-container")}>
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

        {isBigScreen && (
          <div className={styles.workCardWrapper}>
            {props[0]?.CardComponent?.map((data, index) => (
              <div key={index} className={styles.workCardMain}>
                <div className={styles.workCard}>
                  <div className={`${styles.frontCard} ${styles.workCols}`}>
                    {/* {data.icon} */}
                    <ImageCustom
                      height={100}
                      width={100}
                      src={`${base_Url}${data.Image.data.attributes.url}`}
                    />

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
                    <ImageCustom
                      height={100}
                      width={100}
                      src={`${base_Url}${data.Image.data.attributes.url}`}
                    />
                    <h6>{data.Title}</h6>
                  </div>
                  <div className={`${styles.backCard}  ${styles.workCols}`}>
                    <h6>{data.Hedding} </h6>
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
