"use client";

import MobileSlider from "@/components/common/mobileSlider";
import ServiceCard from "@/components/common/serviceCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./style.module.scss";
import { base_Url } from "@/lib/constants";
import { ImageCustom } from "@/components/ui/imageCustom";


const Service = ({ props }) => {

  const { theme, setTheme } = useContext(MyContext);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });


  const settings = {
    className: "center",
    centerPadding: "0px",
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <Icons.SliderArrow width="15" height="15" />
      </div>
    ),
    prevArrow: (
      <div>
        <Icons.SliderArrow width="15" height="15" />
      </div>
    ),

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "15px"
        },
      },
    ],
  };

  return (
    <section
      className={cn(
        styles.serviceDetailsMain,
        theme ? styles.serviceDetailsMainDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceHeading}>
            <p className={styles.serviceText} dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}>
            </p>
            <h3 className={styles.serviceTitle} dangerouslySetInnerHTML={{ __html: `${props[0]?.Description}` }}>

            </h3>
            <Link href="/solutions">
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                {props[0]?.Btn} <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {isBigScreen && (
            <div className={cn(styles.desktopCards)}>
              {props[0]?.Service?.map((data, index) => (

                <ServiceCard
                  key={index}
                  icon={data?.Image?.data?.attributes?.url?`${base_Url}${data?.Image?.data.attributes.url}`:`${base_Url}/`} 
                  subTitle={data.Title}
                  subText={data.Description}
                />

                //   <div key={index} className={styles.serviceBox}>
                //   <div className={styles.bgIcon}>
                //     <ImageCustom src={data?.Image?.data?.attributes?.url?`${base_Url}${data?.Image?.data.attributes.url}`:`${base_Url}/`} 
                //     width={64}
                //     height={64}
                //     alt="bannerImg"
                //      /></div>
                //   <h4 className={styles.sbTitle}>{data.Title}</h4>
                //   <p className={styles.sbText}>{data.Description}</p>
                // </div>
              ))}
            </div>
          )}
        </div>

        <div className={cn(styles.mobileCards)}>
          <MobileSlider slidesToShow={1.3}>
            {props[0]?.Service.map((data, index) => (
              <ServiceCard
                key={index}
                icon={data?.Image?.data?.attributes?.url?`${base_Url}${data?.Image?.data.attributes.url}`:`${base_Url}/`} 
                subTitle={data.Title}
                subText={data.Description}
              />
            ))}
          </MobileSlider>
        </div>
      </div>
    </section>
  );
};
export default Service;
