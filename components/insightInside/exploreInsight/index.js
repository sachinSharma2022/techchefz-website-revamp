"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { MyContext } from "@/context/theme";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";

const sliderData = [
  {
    img: "/images/insightimg3.png",
    title: "5G Networks: The Impact on Connectivity",
    date: "Dec 28, 2023 - 8 Min read",
  },
  {
    img: "/images/insightimg4.png",
    title: "The Revolution of IoT: Enhancing Everyday Life with Smart Technology",
    date: "Dec 28, 2023 - 8 Min read",
  },
  {
    img: "/images/insightimg3.png",
    title: "5G Networks: The Impact on Connectivity",
    date: "Dec 28, 2023 - 8 Min read",
  },
  {
    img: "/images/insightimg4.png",
    title: "5G Networks: The Impact on Connectivity",
    date: "Dec 28, 2023 - 8 Min read",
  },
];
const ExploreInsights = () => {
  const { theme, setTheme } = useContext(MyContext);
  const settings = {
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
        },
      },
    ],
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  };
  return (
    <>
      <div className={theme ? styles.exploreInsightsContainer : styles.lightMode}>
        <div className={styles.titleSection}>
          <h3>INSIGHTS</h3>
          <h1>Explore More of Our Insights</h1>
        </div>

        <div className="insight-explore-slider">
          <Slider {...settings}>
            {sliderData.map((value, index) => (
              <>
                <div className={styles.cardContainer} key={index}>
                  <div className={styles.cardDiv}>
                    <ImageCustom src={value.img} width={730} height={480} />
                    <h3>{value.title}</h3>
                    <div className={styles.spanDiv}>
                        <p>{value.date}</p>
                        <Icons.ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ExploreInsights;
