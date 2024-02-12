"use client";

import ServiceInfoCard from "@/components/common/serviceInfoCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import TextRevel from "@/components/ui/sectionAnimation";
import MobileSlider from "@/components/common/mobileSlider";
import { base_Url } from "@/lib/constants";


const OurNumbers = ({carrer,experience}) => {
 
  const { theme, setTheme } = useContext(MyContext);
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <section
      className={`${styles.numberStyle} ${theme ? styles.numberStyleDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <div >
        
                <p className={cn(styles.projectHighlight,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${carrer?.title}`}}>
                  </p>
                <h2 className={cn(styles.datingText,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${carrer?.description}`}}>
                
                </h2>
              

            <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
            {carrer.button}<Icons.ArrowRight size={18} />
            </Button>
          </div>
          </div>
        </TextRevel>
        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src={experience?.Image?.data?.attributes?.url?`${base_Uri}${experience?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
            <div>
              <p className={styles.ourNumbersText}>
               {experience?.Description}
              </p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {experience?.Vews.map((data, index) => (
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.Title}
                    icon={data?.Image?.data.attributes.url?`${base_Url}${data?.Image?.data.attributes.url}`:`${base_Url}/`}
                    sbText={data.Description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={cn(styles.mobileCards, styles.ourNumberOption)}>
            <MobileSlider slidesToShow={1.3}>
              {experience.Vews.map((data, index) => (
                <ServiceInfoCard
                key={index}
                    sbTitle={data.Title}
                    icon={data?.Image?.data.attributes.url?`${base_Url}${data?.Image?.data.attributes.url}`:`${base_Url}/`}
                    sbText={data.Description}
                />
              ))}
            </MobileSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
