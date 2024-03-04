"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import { useContext } from "react";

import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const Industry = ({ props, CMSImplementation, Industryinner }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={cn(styles.industry, theme ? styles.industryDark : "")}>
      <div className={cn("primary-container")}>
        <TextRevel>
        <div className={styles.contentSection}>
          <div className={styles.industryLeft}>
            <div className="mb-4">
              <h6>{props[0].Title}</h6>
              <h5>{props[0].Description}</h5>
            </div>
            <div className="mb-4">
              <h6> {props[0].SubTitle}</h6>
              <h5>{props[0].Description2}</h5>
            </div>

            <h6>{Industryinner[0].Title}</h6>
            <div className={styles.serviceBtn}>
              {Industryinner[0]?.techStacktags?.map((data, index) => (
                <button key={index} variant="outline" size="xs">
                  {data?.Title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.industryRight}>
            <h3 className={styles.industryHeading}>
              {CMSImplementation[0].Title}
            </h3>
            <p className={styles.industryText}>
              {CMSImplementation[0].Description}
            </p>
          </div>
        </div>
        </TextRevel>
      

        <ImageCustom
          src={
            CMSImplementation[0]?.Image?.data?.attributes?.url
              ? `${base_Uri}${CMSImplementation[0]?.Image?.data?.attributes?.url}`
              : `${base_Uri}/`
          }
          width={1300}
          height={500}
          alt="website-img"
          className={styles.industryImg}
        />
      </div>
    </section>
  );
};

export default Industry;
