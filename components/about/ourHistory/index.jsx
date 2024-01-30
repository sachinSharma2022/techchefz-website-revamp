"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import Slider from "react-slick";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const OurHistory = ({props, OurHistory}) => {
  console.log("manoj",props)
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

 
  return (
    <section
      className={`${styles.ourHistory} ${
        theme ? `${styles.ourHistoryDark} dark-ourHistory` : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.ourHistoryTop}>
          <h6 className={styles.ourHistoryTitle}>{props[0]?.Title}</h6>
          <h3 className={styles.ourHistoryHeading}>
          {props[0]?.SubTitle}
          </h3>
        </div>

        <div className="ourHistorySlider">
          <Slider {...settings}>
            {OurHistory.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.infoStyle}>
                  <h4 className={styles.subHeading}>{data.OurHistoryCard.title}</h4>
                  <p className={styles.ourHistoryContent}>{data.OurHistoryCard.Description}</p>
                </div>
                <div className={styles.OurHistoryImage}>
                  <ImageCustom
                    src={base_Uri+data?.OurHistoryCard?.Image?.data?.attributes?.url}
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
