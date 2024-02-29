"use client";

import LeftDrawer from "@/components/common/leftDrawer";
import { ImageCustom } from "@/components/ui/imageCustom";
import PartnerCard from "@/components/ui/partnerCard";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import { useMediaQuery } from "react-responsive";
import MobileSlider from "@/components/common/mobileSlider";

const CmsType = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1199px)" });

  const typeCard = [
    {
      imgUrl: "/images/drupal.png",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      sbTitle: "Drupal",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      imgUrl: "/images/wordpress.png",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      sbTitle: "WordPress",
      sbText:
        "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
    },
    {
      imgUrl: "/images/Shopify.svg",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      sbTitle: "Shopify",
      sbText:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      imgUrl: "/images/strapi.png",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      sbTitle: "Strapi",
      sbText:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
    {
      imgUrl: "/images/aem.svg",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      sbTitle: "AEM",
      sbText:
        "We Have Expertise In Development Of Mobile Applications Using Native And Hybrid Technologies.",
    },
    {
      imgUrl: "/images/Shopify.svg",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      sbTitle: "Shopify",
      sbText:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
  ];

  return (
    <section
      className={`${styles.cmsTypeStyle} ${theme ? styles.cmsTypeDark : ""}`}
    >
      <div className={cn("primary-container")}>
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

export default CmsType;
