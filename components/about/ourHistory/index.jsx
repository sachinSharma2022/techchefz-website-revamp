"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import TextRevel from "@/components/ui/sectionAnimation";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

const OurHistory = ({ props, OurHistory }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const { theme } = useContext(MyContext);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    setNav3(slider3.current);
  }, []);

  const setting1 = {
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    dots: false,
    fade: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const setting2 = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingTimeline = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: isBigScreen ? 8 : 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const yearCount = [
    {
      year: 2017,
    },
    {
      year: 2018,
    },
    {
      year: 2019,
    },
    {
      year: 2020,
    },
    {
      year: 2020,
    },
    {
      year: 2021,
    },
    {
      year: 2022,
    },
    {
      year: 2023,
    },
    {
      year: 2024,
    },
  ];

  return (
    <section
      className={`${styles.ourHistory} ${
        theme ? `${styles.ourHistoryDark} dark-ourHistory` : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.ourHistoryTop}>
            <h6
              className={cn(styles.ourHistoryTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.ourHistoryHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.SubTitle}` }}
            ></h3>
          </div>
        </TextRevel>
        <div className={cn(styles.sliderSection, "row")}>
          <div className="col-12 col-xl-6">
            <div className={styles.controlSection}>
              <Slider asNavFor={nav2} ref={slider1} {...setting1}>
                {OurHistory.map((data, index) => (
                  <div key={index} className={styles.cardStyle}>
                    <div className={styles.infoStyle}>
                      <h4 className={styles.subHeading}>
                        {data.OurHistoryCard.Title}
                      </h4>
                      <p className={styles.ourHistoryContent}>
                        {data.OurHistoryCard.Description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className={styles.sliderArrow}>
                <button
                  aria-label="Move Left"
                  title="Move Left"
                  className={
                    (cn(styles.button),
                    activeSlide === 0 ? styles.arrowDisabled : styles.button)
                  }
                  onClick={() => slider2?.current?.slickPrev()}
                >
                  <Icons.ArrowLeft />
                </button>
                <button
                  aria-label="Move Right"
                  title="Move Right"
                  className={styles.button}
                  onClick={() => slider2?.current?.slickNext()}
                >
                  <Icons.ArrowRight fill="black" stroke="black" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <Slider
              asNavFor={nav3}
              ref={slider2}
              slidesToShow={1}
              swipeToSlide={true}
              focusOnSelect={true}
              {...setting2}
            >
              {OurHistory.map((data, index) => (
                <div key={index} className={styles.cardStyle}>
                  <div className={styles.OurHistoryImage}>
                    <ImageCustom
                      src={
                        data?.OurHistoryCard?.Image?.data?.attributes?.url
                          ? `${base_Uri}${data?.OurHistoryCard?.Image?.data?.attributes?.url}`
                          : `${base_Uri}/`
                      }
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
      </div>

      <div className={cn(styles.timelineSection, "ourHistorySlider")}>
        <div className={cn("primary-container")}>
          <Slider asNavFor={nav1} ref={slider3} {...settingTimeline}>
            {yearCount.map((item, index) => (
              <div className={styles.countItem} key={index}>
                <h4>{item.year}</h4>
                <div className="slide-dot"></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
