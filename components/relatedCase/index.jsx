"use client";
import React, { useRef, useState } from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import CaptionCard from "@/components/ui/captionCard";
import { cn } from "@/lib/utils";
import Slider from "react-slick";

import styles from "./style.module.scss";

const RelatedCase = (props) => {
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
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    responsive: [
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <section
      className={cn(
        styles.relatedCase,
        props.className,
        theme ? styles.relatedCaseDark : ""
      )}
    >
      <div className={cn("primary-container relative")}>
        <div className={styles.headSection}>
          <div>
            <h6 className={styles.relatedCaseTitle}>
              {props.subTitle || "Related Case Study"}
            </h6>
            <h3 className={styles.relatedCaseHeading}>
              {props.title || "Unravel More of Our Success Stories"}
            </h3>
          </div>

          <div className={styles.sliderArrow}>
            <button
              className={
                activeSlide === 0 ? styles.arrowDisabled : styles.button
              }
              onClick={() => slider?.current?.slickPrev()}
            >
              <Icons.ArrowLeft />
            </button>
            <button
              className={styles.button}
              onClick={() => slider?.current?.slickNext()}
            >
              <Icons.ArrowRight fill="black" stroke="black" />
            </button>
          </div>
        </div>

        <div
          className={cn(
            styles.relatedCaseSlider,
            props.sliderClassName,
            "related-case-slider"
          )}
        >
          <Slider {...settings} ref={slider}>
            {captionCard.map((data, index) => (
              <div key={index}>
                <CaptionCard
                  className={styles.cardStyle}
                  imgSrc={data.imgSrc}
                  title={data.title}
                  textStyle={styles.textStyle}
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
