"use client";
import PartnerCard from "@/components/ui/partnerCard";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";

import LeftDrawer from "@/components/common/leftDrawer";
import MobileSlider from "@/components/common/mobileSlider";
import { ImageCustom } from "@/components/ui/imageCustom";
import { base_Uri } from "@/lib/constants";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const Partners = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1199px)" });

  return (
    <section className={`${styles.partner} ${theme ? styles.partnerDark : ""}`}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <TextRevel>
        <div className={styles.headSection}>
          <h6
            className={cn(styles.partnerTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h6>
          <h3
            className={cn(styles.partnerHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
          ></h3>
        </div>
        </TextRevel>       
        {isBigScreen ? (
          <div className={styles.partnerCards}>
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
                onClick={() => {
                  setIsOpen(true);
                  setIndex(index);
                }}
                arrowUp
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
                  onClick={() => {
                    setIsOpen(true);
                    setIndex(index);
                  }}
                  arrowUp
                />
              ))}
            </MobileSlider>
          </div>
        )}
      </div>

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
      </LeftDrawer>
    </section>
  );
};

export default Partners;
