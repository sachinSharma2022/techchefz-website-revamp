"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";

const SolutionTheProcess = ({props}) => {
  // console.log("neee",props);
  const { theme, setTheme } = useContext(MyContext);
  // const accordionData = [
  //   {
  //     title: "Navigating Cloud Integration Complexities",
  //     description:
  //       "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
  //   },
  //   {
  //     current: styles.active,
  //     title: "Navigating Cloud Integration Complexities",
  //     description:
  //       "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
  //   },
  //   {
  //     title: "Navigating Cloud Integration Complexities",
  //     description:
  //       "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
  //   },
  // ];
  return (
    <section className={`${styles.theProcessStyle} ${theme ? styles.theProcessDark : ""}`}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.headSection}>
          <div>
            <h6 className={styles.heading}>{props?.Title}</h6>
            <h3 className={styles.subHeading}>{props?.SubTitle}</h3>
          </div>

          <div className={styles.ourNumbersImg}>
          <ImageCustom
              src={`${base_Uri}${props?.Images?.data.attributes.url}`}
              width={410}
              height={570}
              alt="bannerImg"
            />
          </div>
        </div>

        <div className={`${styles.processCardSection}`}>
        {props?.ITSolutionsCards?.map((data, index) => (
            <div
              key={index}
              className={`${styles.processCard} ${data.current}`}
            >
              <div className={styles.textGradient}>{data.Title}</div>
              <h4 className={styles.title}>{data?.Description}</h4>
              <p className={styles.description}>{data.secoundDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTheProcess;
