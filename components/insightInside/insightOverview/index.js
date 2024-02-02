"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { MyContext } from "@/context/theme";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";

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
    <section
      className={theme ? styles.insightOverviewContainer : styles.lightMode}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.textContainer}>
          <h1>
            The science behind inspiration and how to design more of it into
            your life
          </h1>
          <div className={styles.publishDiv}>
            <div className={styles.publishFlex}>
              <p>Published On</p>
              <h4>Dec 28, 2023</h4>
            </div>
            <div className={styles.publishFlex}>
              <p>Author</p>
              <h4>Sachin Kumar</h4>
            </div>
          </div>
          <div className={styles.serviceDiv}>
            <p>Services</p>
            <div className={styles.techStackDiv}>
              {techStackData.map((value) => (
                <button key={value} className={styles.techBtn}>
                  {value.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageDiv}>
        <ImageCustom
          src="/images/insight.png"
          alt="Image"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default InsightOverview;
