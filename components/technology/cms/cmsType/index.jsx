"use client";

import MobileSlider from "@/components/common/mobileSlider";
import PartnerCard from "@/components/ui/partnerCard";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

const CmsType = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1199px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 690px)" });

  return (
    <section
      className={`${styles.cmsTypeStyle} ${theme ? styles.cmsTypeDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <h6
              className={cn(styles.projectHighlight, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.datingText, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></h3>
          </div>
        </TextRevel>

        {isBigScreen ? (
          <div className={`${styles.cmsGridCards} `}>
            {props?.Slider?.map((data, index) => (
              <PartnerCard
                key={index}
                imgSrc={
                  data?.Image?.data?.attributes?.url
                    ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                darkImgSrc={
                  data?.Image?.data?.attributes?.url
                    ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                cardTitle={data.Title}
                cardContent={data.Description}
                arrowUp
                onClick={() => {
                  setIsOpen(true);
                  setIndex(index);
                }}
              />
            ))}
          </div>
        ) : (
          <div className={styles.mobileSlider}>
            <MobileSlider slidesToShow={isSmallScreen ? 2.2 : 1.4}>
              {props?.Slider?.map((data, index) => (
                <PartnerCard
                  key={index}
                  imgSrc={
                    data?.Image?.data?.attributes?.url
                      ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  darkImgSrc={
                    data?.Image?.data?.attributes?.url
                      ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  cardTitle={data.Title}
                  cardContent={data.Description}
                  arrowUp
                  onClick={() => {
                    setIsOpen(true);
                    setIndex(index);
                  }}
                />
              ))}
            </MobileSlider>
          </div>
        )}
      </div>
    </section>
  );
};

export default CmsType;
