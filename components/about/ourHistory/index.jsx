"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext, useState, useRef, useEffect } from "react";
import Slider from "react-slick";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const OurHistory = ({props, OurHistory}) => {
  console.log("manoj",props)
  const { theme } = useContext(MyContext);

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
    customPaging: function (index) {
      var num = index + 1;
      return (
        <div>
          <span className="yearCount">201{num + 1}</span>
          <button />
        </div>
      );
    },
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderData = [
    {
      title:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      imgSrc: "/images/img/about/slider1.png",
    },
    {
      title:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined.",
      content:
        "Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and determination, they set on a transformative journey to shape the future.",
      imgSrc: "/images/goals1.png",
    },
    {
      title:
        "There are many variations of passages of Lorem Ipsum available, but the majority.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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
          <h6 className={styles.ourHistoryTitle}>{props[0]?.Title}</h6>
          <h3 className={styles.ourHistoryHeading}>
          {props[0]?.SubTitle}
          </h3>
        </div>

        <div className={cn(styles.sliderSection, "row")}>
          <div className="col-12 col-sm-6">
            <div className={styles.controlSection}>
              <Slider asNavFor={nav2} ref={slider1} {...setting1}>
                {OurHistory.map((data, index) => (
                  <div key={index} className={styles.cardStyle}>
                    <div className={styles.infoStyle}>
                      <h4 className={styles.subHeading}>{data.OurHistoryCard.title}</h4>
                      <p className={styles.ourHistoryContent}>{data.OurHistoryCard.Description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className={styles.sliderArrow}>
                <button
                  className={styles.button}
                  // className={
                  //   activeSlide === 0 ? styles.arrowDisabled : styles.button
                  // }
                  onClick={() => slider2?.current?.slickPrev()}
                >
                  <Icons.ArrowLeft />
                </button>
                <button
                  className={styles.button}
                  onClick={() => slider2?.current?.slickNext()}
                >
                  <Icons.ArrowRight fill="black" stroke="black" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
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
                      src={data?.OurHistoryCard?.Image?.data?.attributes?.url?`${base_Uri}${data?.OurHistoryCard?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
                      
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
            {sliderData.map((index) => (
              <div key={index} className={styles.cardStyle} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
