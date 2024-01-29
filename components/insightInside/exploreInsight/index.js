"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Slider from "react-slick";

import styles from "./style.module.scss";

const sliderData = [
  {
    img: "/images/insightimg3.png",
    title: "5G Networks: The Impact on Connectivity",
    date: "Dec 28, 2023 - 8 Min read",
  },
  {
    img: "/images/insightimg4.png",
    title:
      "The Revolution of IoT: Enhancing Everyday Life with Smart Technology",
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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
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

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
        },
      },
    ],
  };
  return (
    <section
      className={theme ? styles.exploreInsightsContainer : styles.lightMode}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.titleSection}>
          <h3>INSIGHTS</h3>
          <h1>Explore More of Our Insights</h1>
        </div>
      </div>

      <div className={cn("insight-explore-slider", styles.gridSection)}>
        <Slider {...settings}>
          {sliderData.map((value, index) => (
            <div className={styles.cardContainer} key={index}>
              <div className={styles.cardDiv}>
                <div className={styles.imgBox}>
                  <ImageCustom src={value.img} width={500} height={500} />
                </div>
                <h3>{value.title}</h3>
                <div className={styles.spanDiv}>
                  <p>{value.date}</p>
                  <Icons.ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExploreInsights;
