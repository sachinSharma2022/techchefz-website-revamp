"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { MyContext } from "@/context/theme";
import { ImageCustom } from "@/components/ui/imageCustom";

const InsightOverview = () => {
  const { theme, setTheme } = useContext(MyContext);

  const techStackData = [
    { name: "Web Design" },
    { name: "CMS" },
    { name: "React" },
    { name: "AEM" },
    { name: "Retail" },
  ];
  return (
    <>
      <div
        className={theme ? styles.insightOverviewContainer : styles.lightMode}
      >
        <div className={styles.textContainer}>
          <h2>
            The science behind inspiration and how to design more of it into
            your life
          </h2>
          <div className={styles.publishDiv}>
            <div className={styles.publishFlex}>
              <p>Published On</p>
              <h2>Dec 28, 2023</h2>
            </div>
            <div className={styles.publishFlex}>
              <p>Author</p>
              <h2>Sachin Kumar</h2>
            </div>
          </div>
          <div className={styles.serviceDiv}>
            <p>Services</p>
            <div className={styles.techStackDiv}>
              {techStackData.map((value) => (
                <>
                  <div className={styles.techBtn}>{value.name}</div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageDiv}>
            <ImageCustom
              src="/images/insight.png"
              alt="Image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightOverview;
