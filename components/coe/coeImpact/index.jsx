"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const CoeImpact = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.impact} ${theme ? styles.impactDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={styles.headSection}>
          <h6 className={styles.subHeading}>Impact</h6>
          <h3 className={styles.impactHeading}>
            {props.heading || "Confronting Out of Stock (OOS) Challenges"}
          </h3>
        </div>

        <div className={styles.impactTopSection}>
          <div className={styles.impactImage}>
            <ImageCustom
              src={"/images/impact1.png"}
              width={700}
              height={600}
              alt="impact-img"
            />
          </div>
          <div className={styles.topSectionRight}>
            <h4>Unleashing Language Precision and Data Excellence</h4>
            <p>
              Out of Stock (OOS) situations present a significant challenge in
              the retail industry, directly impacting sales and customer
              satisfaction. The Solution Accelerator tackles this pervasive
              issue head-on by leveraging the power of real-time data and
              advanced analytics.{" "}
            </p>
          </div>
        </div>
        <div className={styles.impactTopSection}>
          <div className={styles.topSectionRight}>
            <h4>Unleashing Language Precision and Data Excellence</h4>
            <p>
              Out of Stock (OOS) situations present a significant challenge in
              the retail industry, directly impacting sales and customer
              satisfaction. The Solution Accelerator tackles this pervasive
              issue head-on by leveraging the power of real-time data and
              advanced analytics.{" "}
            </p>
          </div>
          <div className={styles.impactImage}>
            <ImageCustom
              src={"/images/impact2.png"}
              width={700}
              height={600}
              alt="impact-img"
            />
          </div>
        </div>
        <div className={styles.impactTopSection}>
          <div className={styles.impactImage}>
            <ImageCustom
              src={"/images/impact3.png"}
              width={700}
              height={600}
              alt="impact-img"
            />
          </div>
          <div className={styles.topSectionRight}>
            <h4>Unleashing Language Precision and Data Excellence</h4>
            <p>
              Out of Stock (OOS) situations present a significant challenge in
              the retail industry, directly impacting sales and customer
              satisfaction. The Solution Accelerator tackles this pervasive
              issue head-on by leveraging the power of real-time data and
              advanced analytics.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoeImpact;
