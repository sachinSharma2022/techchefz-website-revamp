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
            <h2
              className={cn(styles.datingText, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></h2>
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
            <MobileSlider slidesToShow={1.4}>
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
      {/* 
      <LeftDrawer
        title={props?.Slider[index]?.Title}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          className={cn(styles.modalBody, theme ? styles.darkThemeStyle : "")}
        >
          <div className={styles.cardImg}>
            <ImageCustom
              src={
                props?.Slider[index]?.Image?.data?.attributes?.url
                  ? `${base_Uri}${props?.Slider[index]?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={110}
              height={40}
              alt="partner-logo"
              className={styles.imgStyle}
            />
          </div>
          <p className={styles.modalContent}>
            {props?.Slider[index]?.Description}
          </p>
          <Link href={props?.Slider[index]?.BtnLink} target="_blank">
            {props?.Slider[index]?.BtnLink}
          </Link>
        </div>
      </LeftDrawer> */}
    </section>
  );
};

export default CmsType;
