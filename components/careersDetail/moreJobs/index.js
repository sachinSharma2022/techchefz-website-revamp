"use client";

import React, { useContext, useRef, useState } from "react";
import styles from "./style.module.scss";
import { MyContext } from "@/context/theme";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const MoreJobs = () => {
  const { theme, setTheme } = useContext(MyContext);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
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
  };

  const sliderData = [
    {
      title: "Developer - NodeJS",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect.",
      exp: "4-6 Years",
      location: "Work From Home",
    },
    {
      title: "QA Engineer",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect.",
      exp: "4-6 Years",
      location: "Work From Home",
    },
    {
      title: "Software Developer",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect.",
      exp: "4-6 Years",
      location: "Work From Home",
    },
    {
      title: "Developer - NodeJS",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect.",
      exp: "4-6 Years",
      location: "Work From Home",
    },
    {
      title: "Developer - NodeJS",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect.",
      exp: "4-6 Years",
      location: "Work From Home",
    },
    {
      title: "Developer - NodeJS",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect.",
      exp: "4-6 Years",
      location: "Work From Home",
    },
  ];
  return (
    <>
      <div className={theme ? styles.jobDetailContainer : styles.lightMode}>
        <div className={cn("primary-container")}>
          <div className={styles.titleSection}>
            <div>
              <h3>SIMILAR VACANCIES</h3>
              <h1>More jobs at TechChefz</h1>
            </div>

            <div className={styles.sliderArrow}>
              <button
                className={
                  activeSlide === 0 ? styles.arrowDisabled : styles.button
                }
                onClick={() => slider?.current?.slickPrev()}
              >
                <Icons.ArrowLeft />
              </button>
              <button
                className={styles.button}
                onClick={() => slider?.current?.slickNext()}
              >
                <Icons.ArrowRight fill="black" stroke="black" />
              </button>
            </div>
          </div>

          <div className="job-detail-slider">
            <Slider {...settings} ref={slider}>
              {sliderData.map((value, index) => (
                <div className={styles.cardContainer} key={index}>
                  <div className={styles.cardDiv}>
                    <h1>{value.title}</h1>
                    <p className={styles.description}>{value.content}</p>
                    <div className={styles.spanDiv}>
                      <div className={styles.spanDetail}>
                        <Icons.TimerIcon size={16} />
                        <span>{value.exp}</span>
                      </div>
                      <div className={styles.spanDetail}>
                        <Icons.LocationIcon size={16} />
                        <span>{value.location}</span>
                      </div>
                    </div>
                    <Button
                      variant={theme ? "lightBlueBtn" : "blueBtn"}
                      size="md"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreJobs;
