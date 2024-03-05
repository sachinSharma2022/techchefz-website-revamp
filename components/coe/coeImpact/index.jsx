"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import TextRevel from "@/components/ui/sectionAnimation";

const CoeImpact = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.impact} ${theme ? styles.impactDark : ""}`}>
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.headSection}>
            <h6
              className={cn(styles.subHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.impactHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h3>
          </div>
        </TextRevel>
        <div className={styles.cardSection}>
          <div className={styles.impactTopSection}>
            <div className={styles.impactImage}>
              <ImageCustom
                src={
                  props?.TechnologicalCard[0].Image.data.attributes.url
                    ? `${base_Uri}${props?.TechnologicalCard[0].Image.data.attributes.url}`
                    : `${base_Uri}/`
                }
                width={700}
                height={600}
                alt="impact-img"
              />
            </div>
            <div className={styles.topSectionRight}>
              <h4>{props?.TechnologicalCard[0]?.Title}</h4>
              <p>{props?.TechnologicalCard[0]?.Description}</p>
            </div>
          </div>

          <div className={styles.impactTopSection}>
            <div className={styles.topSectionRight}>
              <h4>{props?.TechnologicalCard[1]?.Title}</h4>
              <p>{props?.TechnologicalCard[1]?.Description}</p>
            </div>
            <div className={styles.impactImage}>
              <ImageCustom
                src={
                  props?.TechnologicalCard[1].Image.data.attributes.url
                    ? `${base_Uri}${props?.TechnologicalCard[1].Image.data.attributes.url}`
                    : `${base_Uri}/`
                }
                width={700}
                height={600}
                alt="impact-img"
              />
            </div>
          </div>

          <div className={styles.impactTopSection}>
            <div className={styles.impactImage}>
              <ImageCustom
                src={
                  props?.TechnologicalCard[2].Image.data.attributes.url
                    ? `${base_Uri}${props?.TechnologicalCard[2].Image.data.attributes.url}`
                    : `${base_Uri}/`
                }
                width={700}
                height={600}
                alt="impact-img"
              />
            </div>
            <div className={styles.topSectionRight}>
              <h4>{props?.TechnologicalCard[2]?.Title}</h4>
              <p>{props?.TechnologicalCard[2]?.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoeImpact;
