"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./style.module.scss";
import Image from "next/image";

const Service = () => {
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
          slidesToShow: 2,
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
      <div className={`${styles.serviceOption} plan-slider`}>
        <Slider {...settings}>
          <div>
            <div className={styles.serviceBox}>
              <div className={styles.bgIcon}>
                <Image
                  //src="/in/en/service/ride-sure/images/shield.svg"
                  src=""
                  alt=""
                  width="160"
                  height="160"
                />
              </div>
              <div className={styles.sbTitle}>
                Strategy & Digital Transformation
              </div>
              <div className={styles.sbText}>
                We Provide A Humanized And Contextual Experience To Build An
                Exclusive Digital Experience.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Service;
