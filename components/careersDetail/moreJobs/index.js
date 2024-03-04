"use client";

import JobCard from "@/components/common/jobCard";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const MoreJobs = ({ props }) => {
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
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div
        className={cn(
          styles.jobDetailContainer,
          theme ? styles.jobDetailDarkContainer : ""
        )}
      >
        <div className={cn("primary-container", styles.containerStyle)}>
          <TextRevel>
          <div className={styles.titleSection}>
            <div>
              <h6>{props[0]?.Title}</h6>
              <h3>{props[0]?.SubTitle}</h3>
            </div>
          </div>
          </TextRevel>
          

          <div className={cn(styles.sliderSection)}>
            <Slider {...settings} ref={slider}>
              {sliderData.map((value, index) => (
                <JobCard
                  key={index}
                  title={value.title}
                  content={value.content}
                  exp={value.exp}
                  location={value.location}
                />
              ))}
            </Slider>

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
        </div>
      </div>
    </>
  );
};

export default MoreJobs;
