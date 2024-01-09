"use client";
import React from "react";
import Slider from "react-slick";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const OurHistory = () => {
  const { theme, setTheme } = useContext(MyContext);
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <span className="yearCount">201{i + 1}</span>
          <button />
        </div>
      );
    },
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
    <section
      className={`${styles.ourHistory} ${
        theme ? `${styles.ourHistoryDark} dark-ourHistory` : ""
      }`}
    >
      <div className={styles.ourHistoryTop}>
        <h6 className={styles.ourHistoryTitle}>Our History</h6>
        <h3 className={styles.ourHistoryHeading}>
          Tracing Innovation Through Time: Our IT Journey.
        </h3>
      </div>

      <div className="ourHistorySlider">
        <Slider {...settings}>
          {sliderData.map((data, index) => (
            <div key={index} className={styles.cardStyle}>
              <div className={styles.infoStyle}>
                <h4 className={styles.subHeading}>{data.title}</h4>
                <p className={styles.ourHistoryContent}>{data.content}</p>
              </div>
              <div className={styles.OurHistoryImage}>
                <ImageCustom
                  src={data.imgSrc}
                  width={530}
                  height={397}
                  alt="slider-img"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurHistory;
