"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { base_Uri } from "@/lib/constants";

const OurResults = ({props}) => {
  import MobileSlider from "@/components/common/mobileSlider";
import { useMediaQuery } from "react-responsive";

  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  // const resultCardData = [
  //   {
  //     number: "4+",
  //     icon: <Icons.Market width={36} height={36} />,
  //     title: "Years of Experience in Market.",
  //   },
  //   {
  //     number: "1M+",
  //     icon: <Icons.MarketPlace width={36} height={36} />,
  //     title: "Users growth in marketplace.",
  //   },
  //   {
  //     number: "300%",
  //     icon: <Icons.Rates width={36} height={36} />,
  //     title: "Years of Experience in Market.",
  //   },
  //   {
  //     number: "120%",
  //     icon: <Icons.PerformanceIcon width={36} height={36} />,
  //     title: "Years of Experience in Market.",
  //   },
  // ];

  return (
    <section
      className={`${styles.ourResults} ${theme ? styles.ourResultsDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h6 className={styles.ourResultsTitle}>{props[0].Title}</h6>
          <h3 className={styles.ourResultsHeading}>
            {props[0].SubTitle}
          </h3>
          <p className={styles.ourResultsText}>
            {props[0].Description}
          </p>
        </div>
        <div className={styles.resultCardWrapper}>
          {props[0]?.Views?.map((data, index) => (
            <div key={index} className={styles.resultCard}>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className={styles.cardNum}>{data.Title}</h6>
                <div className={styles.cardNum}>
                  <Image height={36} width={36}  src={`${base_Uri}${data.Image.data.attributes.url}`} />
                 
                  
                </div>
              </div>
              <p className={styles.cardText}>{data.Description}</p>
            </div>
          ))}
        </div>
      </div>

      {isMobileScreen && (
        <div className={styles.mobileSlider}>
          <MobileSlider slidesToShow={1.4}>
            {resultCardData.map((data, index) => (
              <div key={index} className={styles.resultCard}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className={styles.cardNum}>{data.number}</h6>
                  <div className={styles.cardNum}>{data.icon}</div>
                </div>
                <p className={styles.cardText}>{data.title}</p>
              </div>
            ))}
          </MobileSlider>
        </div>
      )}
    </section>
  );
};

export default OurResults;
