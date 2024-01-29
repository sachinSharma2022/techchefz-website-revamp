"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import Slider from "react-slick";

import { cn } from "@/lib/utils";
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
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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
      imgSrc: "/images/goals1.png",
    },
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/goals2.png",
    },
    {
      title:
        "Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.",
      content:
        "Founded in 2017. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future TechChefz arose from a shared passion for technology, uniting a team of pioneers",
      imgSrc: "/images/goals3.png",
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
        "Founded in 2017. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future TechChefz arose from a shared passion for technology, uniting a team of pioneers,",
      imgSrc: "/images/img/about/slider1.png",
    },
  ];
  return (
    <section
      className={`${styles.ourHistory} ${
        theme ? `${styles.ourHistoryDark} dark-ourHistory` : ""
      }`}
    >
      <div className={cn("primary-container")}>
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
      </div>
    </section>
  );
};

export default OurHistory;
