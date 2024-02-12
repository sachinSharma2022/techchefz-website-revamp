"use client";

import MobileSlider from "@/components/common/mobileSlider";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";
import Image from "next/image";
import { base_Uri } from "@/lib/constants";
import { base_Url } from "@/lib/constants";
import { ImageCustom } from "@/components/ui/imageCustom";
const WhatWeDo = ({props}) => {
  
  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  // const cardData = [
  //   {
  //     icon: (
  //       <Icons.PlatformSelection
  //         className={styles.workCardIcon}
  //         width={100}
  //         height={100}
  //       />
  //     ),
  //     title: "Digital Strategy",
  //     content:
  //       "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT.",
  //   },
  //   {
  //     icon: (
  //       <Icons.PlatformSelection
  //         className={styles.workCardIcon}
  //         width={100}
  //         height={100}
  //       />
  //     ),
  //     title: "Platform Selection",
  //     content:
  //       "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT.",
  //   },
  //   {
  //     icon: (
  //       <Icons.PlatformBuild
  //         className={styles.workCardIcon}
  //         width={100}
  //         height={100}
  //       />
  //     ),
  //     title: "Platform Builds",
  //     content:
  //       "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT.",
  //   },
  //   {
  //     icon: (
  //       <Icons.ProductBuild
  //         className={styles.workCardIcon}
  //         width={100}
  //         height={100}
  //       />
  //     ),
  //     title: "Product Builds",
  //     content:
  //       "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT.",
  //   },
  //   {
  //     icon: (
  //       <Icons.Multiple
  //         className={styles.workCardIcon}
  //         width={100}
  //         height={100}
  //       />
  //     ),
  //     title: "Multiple Infrastructure",
  //     content:
  //       "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT.",
  //   },
  //   {
  //     icon: (
  //       <Icons.ManagedServices
  //         className={styles.workCardIcon}
  //         width={100}
  //         height={100}
  //       />
  //     ),
  //     title: "Managed Services",
  //     content:
  //       "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT.",
  //   },
  //   {
  //     icon: (
  //       <Icons.TeamAugmentation
  //         className={styles.workCardIcon}
  //         width={100}
  //         height={100}
  //       />
  //     ),
  //     title: "Team Augmentation",
  //     content:
  //       "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT.",
  //   },
  // ];
  return (
    <section
      className={`${styles.whatWeDo} ${theme ? styles.whatWeDoDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h6 className={cn(styles.weDoTitle, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}`}}>
          </h6>
          <h3 className={cn(styles.weDoHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props[0]?.Description}`}}>
           
          </h3>
        </div>

        <div className={styles.workCardWrapper}>
          {props[0]?.CardComponent?.map((data, index) => (
            <div key={index} className={styles.workCardMain}>
              <div className={styles.workCard}>
                <div className={`${styles.frontCard} ${styles.workCols}`} >
                  {/* {data.icon} */}
                  <ImageCustom height={100}  width={100} src={`${base_Url}${data.Image.data.attributes.url}`} />
                  
                  <h3>{data.Title}</h3>
                </div>
                <div className={`${styles.backCard}  ${styles.workCols}`}>
                  <h3>{data.Hedding} </h3>
                  <p>{data.Description} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isMobileScreen && (
        <div className={styles.mobileSlider}>
          <MobileSlider slidesToShow={1.4}>
            {cardData.map((data, index) => (
              <div key={index} className={styles.workCardMain}>
                <div className={styles.workCard}>
                  <div className={`${styles.frontCard} ${styles.workCols}`}>
                    {data.icon}
                    <h6>{data.title}</h6>
                  </div>
                  <div className={`${styles.backCard}  ${styles.workCols}`}>
                    <h6>{data.title} </h6>
                    <p>{data.content} </p>
                  </div>
                </div>
              </div>
            ))}
          </MobileSlider>
        </div>
      )}
    </section>
  );
};

export default WhatWeDo;
