"use client";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const OurHistory = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

    // responsive: [
    //    {
    //       breakpoint: 1199,
    //       settings: {
    //          slidesToShow: 2,
    //          slidesToScroll: 1,
    //          centerMode: false,
    //          arrows: true,
    //       },
    //    },
    //    {
    //       breakpoint: 600,
    //       settings: {
    //          slidesToShow: 1,
    //          slidesToScroll: 1,
    //          arrows: true,
    //       },
    //    },
    //    {
    //       breakpoint: 480,
    //       settings: {
    //          slidesToShow: 1,
    //          slidesToScroll: 1,
    //          arrows: true,
    //          centerPadding: "15px",
    //       },
    //    },
    // ],
  };

  const sliderData = [
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/img/about/slider1.png",
    },
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/img/about/slider1.png",
    },
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/img/about/slider1.png",
    },
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/img/about/slider1.png",
    },
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/img/about/slider1.png",
    },
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/img/about/slider1.png",
    },
  ];
  return (
    <section className={styles.ourHistory}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-7 mb-4">
            <h6 className={styles.ourHistoryTitle}>Our History</h6>
            <h3 className={styles.ourHistoryHeading}>
              Tracing Innovation Through Time: Our IT Journey.
            </h3>
          </div>
        </div>

        <div className="ourHistorySlider">
          <Slider {...settings}>
            {sliderData.map((data, index) => (
              <div key={index}>
                <div className="row justify-content-between">
                  <div className="col-md-6 col-lg-5">
                    <h4 className={styles.subHeading}>{data.title}</h4>
                    <p className={styles.ourHistoryContent}>{data.content}</p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className={styles.OurHistoryImage}>
                      <ImageCustom
                        src={data.imgSrc}
                        width={540}
                        height={397}
                        alt="slider-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
