"use client";
import React, { useRef, useState } from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import CaptionCard from "@/components/ui/captionCard";
import { cn } from "@/lib/utils";
import Slider from "react-slick";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";
import TextRevel from "../ui/sectionAnimation";

const RelatedCase = ({ props, className, sliderClassName, params }) => {
   const [oldSlide, setOldSlide] = useState(0);
   const [activeSlide, setActiveSlide] = useState(0);
   const [activeSlide2, setActiveSlide2] = useState(0);
   const slider = useRef(null);
   const { theme, setTheme } = useContext(MyContext);

   var settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      beforeChange: (current, next) => {
         setOldSlide(current);
         setActiveSlide(next);
      },
      afterChange: (current) => setActiveSlide2(current),
      responsive: [
         {
            breakpoint: 3000,
            settings: {
               slidesToShow: 3.8,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 1500,
            settings: {
               slidesToShow: 2.5,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1.5,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <section className={cn(styles.relatedCase, theme ? styles.relatedCaseDark : "", className ? className : styles.spaceStyle)}>
         <div className={cn("primary-container relative")}>
            <TextRevel>
               <div className={styles.headSection}>
                  <div>
                     <h6
                        className={cn(styles.relatedCaseTitle, "gradient-text")}
                        dangerouslySetInnerHTML={{
                           __html: `${props[0]?.attributes?.CaseStudy?.Title}`,
                        }}
                     ></h6>
                     <h3
                        className={cn(styles.relatedCaseHeading, "gradient-text")}
                        dangerouslySetInnerHTML={{
                           __html: `${props[0]?.attributes?.CaseStudy?.Description}`,
                        }}
                     ></h3>
                  </div>

                  <div className={styles.sliderArrow}>
                     <button className={activeSlide === 0 ? styles.arrowDisabled : styles.button} onClick={() => slider?.current?.slickPrev()}>
                        <Icons.ArrowLeft />
                     </button>
                     <button className={styles.button} onClick={() => slider?.current?.slickNext()}>
                        <Icons.ArrowRight fill="black" stroke="black" />
                     </button>
                  </div>
               </div>
            </TextRevel>

            <div className={cn(styles.relatedCaseSlider, sliderClassName, "related-case-slider")}>
               <Slider {...settings} ref={slider}>
                  {props.map((data, index) => (
                     <div key={index}>
                        <CaptionCard
                           className={styles.cardStyle}
                           imgSrc={
                              data?.attributes?.Banner?.PortfolioImage?.data?.attributes?.url
                                 ? base_Uri + data?.attributes?.Banner?.PortfolioImage?.data?.attributes?.url
                                 : `${base_Uri}/`
                           }
                           title={data?.attributes?.Banner?.PortfolioTitle}
                           redirect={data.id}
                           textStyle={styles.textStyle}
                           params={params}
                        />
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   );
};

export default RelatedCase;
