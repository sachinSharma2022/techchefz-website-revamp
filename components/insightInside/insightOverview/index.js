"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { MyContext } from "@/context/theme";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

const InsightOverview = ({props, Insightinner, TechStackData}) => {
 
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={theme ? styles.insightOverviewContainer : styles.lightMode}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.textContainer}>
          <h1>
            {props[0]?.Title}
          </h1>
          <div className={styles.publishDiv}>
            <div className={styles.publishFlex}>
              <p>{Insightinner[0].Title}</p>
              <h5>{Insightinner[0].Description}</h5>
            </div>
            <div className={styles.publishFlex}>
            <p>{Insightinner[1].Title}</p>
              <h5>{Insightinner[1].Description}</h5>
            </div>
          </div>
          <div className={styles.serviceDiv}>
            <p>{TechStackData[0]?.Title}</p>
            <div className={styles.techStackDiv}>
              {TechStackData[0].techStacktags.map((value) => (
                <button key={value} className={styles.techBtn}>
                  {value.Title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <ImageCustom
          src={props[0]?.Image?.data?.attributes?.url?`${base_Uri}${props[0]?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
          alt="Image"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default InsightOverview;
