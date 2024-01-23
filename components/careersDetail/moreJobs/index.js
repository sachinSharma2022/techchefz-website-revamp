"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { MyContext } from "@/context/theme";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

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
const MoreJobs = () => {
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
      <div className={theme ? styles.jobDetailContainer : styles.lightMode}>
        <div className={cn("primary-container")}>
          <div className={styles.titleSection}>
            <h3>SIMILAR VACANCIES</h3>
            <h1>More jobs at TechChefz</h1>
          </div>

          <div className="job-detail-slider">
            <Slider {...settings}>
              {sliderData.map((value, index) => (
                <>
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
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreJobs;
