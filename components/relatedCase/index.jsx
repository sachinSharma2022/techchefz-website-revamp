"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import CaptionCard from "@/components/ui/captionCard";
import { cn } from "@/lib/utils";
import Slider from "react-slick";

import styles from "./style.module.scss";

const RelatedCase = (props) => {
   const { theme, setTheme } = useContext(MyContext);
   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: (
         <div>
            <Icons.SliderArrow />
         </div>
      ),
      prevArrow: (
         <div>
            <Icons.SliderArrow />
         </div>
      ),
      responsive: [
         {
            breakpoint: 1500,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1,
               arrows:false
            },
         },
      ],
   };

   const captionCard = [
      {
         imgSrc: "/images/case1.png",
         title: "Revolutionizing Retail: A Digital Transition for Royal Enfield",
      },
      {
         imgSrc: "/images/case2.png",
         title: "Fitbit OS: A Digital Transforming Fitness Tracking",
      },
      {
         imgSrc: "/images/case1.png",
         title: "Revolutionizing Retail: A Digital Transition for Royal Enfield",
      },
      {
         imgSrc: "/images/case2.png",
         title: "Nike’s Expansion and Global Outlook",
      },
      {
         imgSrc: "/images/case1.png",
         title: "Nike’s Expansion and Global Outlook",
      },
      {
         imgSrc: "/images/case2.png",
         title: "Nike’s Expansion and Global Outlook",
      },
      {
         imgSrc: "/images/case2.png",
         title: "Fitbit OS: A Digital Transforming Fitness Tracking",
      },
      {
         imgSrc: "/images/case1.png",
         title: "Revolutionizing Retail: A Digital Transition for Royal Enfield",
      },
   ];
   return (
      <section className={cn(styles.relatedCase, props.className, theme ? styles.relatedCaseDark : "")}>
         <div className={cn("primary-container")}>
            <div className={styles.headSection}>
               <h6 className={styles.relatedCaseTitle}>Related Case Study</h6>
               <h3 className={styles.relatedCaseHeading}>Unravel More of Our Success Stories</h3>
            </div>
         </div>

         <div className={cn(styles.relatedCaseSlider, props.sliderClassName, "related-case-slider")}>
            <Slider {...settings}>
               {captionCard.map((data, index) => (
                  <div key={index}>
                     <CaptionCard className={styles.cardStyle} imgSrc={data.imgSrc} title={data.title} textStyle={styles.textStyle} />
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   );
};

export default RelatedCase;
