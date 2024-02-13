"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { base_Uri } from "@/lib/constants";
import MobileSlider from "@/components/common/mobileSlider";
import { useMediaQuery } from "react-responsive";
import { ImageCustom } from "@/components/ui/imageCustom";
import { base_Url } from "@/lib/constants";



const OurResults = ({props}) => {


  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });



  return (
    <section
      className={`${styles.ourResults} ${theme ? styles.ourResultsDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h6 className={cn(styles.ourResultsTitle, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props[0].Title}`}}>
            </h6>
          <h3 className={cn(styles.ourResultsHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props[0].SubTitle}`}}>
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
                  <ImageCustom height={36} width={36}  src= {data?.Image?.data?.attributes?.url?`${base_Url}${data?.Image?.data?.attributes?.url}`:`${base_Url}/`} />

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
            {props[0]?.Views?.map((data, index) => (
              <div key={index} className={styles.resultCard}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className={styles.cardNum}>{data.Title}</h6>
                  <div className={styles.cardNum}><ImageCustom height={36} width={36}  src= {data?.Image?.data?.attributes?.url?`${base_Url}${data?.Image?.data?.attributes?.url}`:`${base_Url}/`} /></div>
                </div>
                <p className={styles.cardText}>{data.Description}</p>
              </div>
            ))}
          </MobileSlider>
        </div>
      )}
    </section>
  );
};

export default OurResults;
