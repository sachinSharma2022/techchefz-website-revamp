"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const Service = () => {
  const serviceCard = [
    {
      icon: <Icons.Transform width={64} height={64} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.CustomDevelopment width={64} height={64} />,
      sbTitle: "Product Engineering & Custom Development",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.MarTech width={64} height={64} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.Intelligence width={64} height={64} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.Platforms width={64} height={64} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.Cloud width={64} height={64} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.DataIntelligence width={64} height={64} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
  ];
  const settings = {
    className: "center",
    centerPadding: "0px",
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <section className={styles.serviceDetailsMain}>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceHeading}>
          <p className={styles.serviceText}>Service</p>
          <h3 className={styles.serviceTitle}>
            Exclusive development leveraging top notch technologies
          </h3>
          <Button variant="outline" size="md">
            Our Solutions <Icons.ArrowRight size={18} />
          </Button>
        </div>

        <div className={`${styles.desktopCards} ${styles.serviceOption} `}>
          {serviceCard.map((data, index) => (
            <div key={index} className={styles.serviceBox}>
              <div className={styles.bgIcon}>{data.icon}</div>
              <div className={styles.sbTitle}>{data.sbTitle}</div>
              <div className={styles.sbText}>{data.sbText}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.serviceOption} service-mobile-slider`}>
        <Slider {...settings}>
          {serviceCard.map((data, index) => (
            <div key={index}>
              <div key={index} className={styles.serviceBox}>
                <div className={styles.bgIcon}>{data.icon}</div>
                <div className={styles.sbTitle}>{data.sbTitle}</div>
                <div className={styles.sbText}>{data.sbText}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Service;
