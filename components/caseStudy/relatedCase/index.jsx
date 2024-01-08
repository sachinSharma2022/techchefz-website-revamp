"use client";
import React from "react";
import Slider from "react-slick";
import CaptionCard from "@/components/ui/captionCard";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";

const RelatedCase = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <div>
        <Icons.sliderArrow />
      </div>
    ),
    prevArrow: (
      <div>
        <Icons.sliderArrow />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
        breakpoint: 480,
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
  ];
  return (
    <section className={styles.relatedCase}>
      <div className={styles.headSection}>
        <h6 className={styles.relatedCaseTitle}>Related Case Study</h6>
        <h3 className={styles.relatedCaseHeading}>
          Unravel More of Our Success Stories
        </h3>
      </div>

      <div className={`${styles.relatedCaseSlider} related-case-slider`}>
        <Slider {...settings}>
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
    </section>
  );
};

export default RelatedCase;
