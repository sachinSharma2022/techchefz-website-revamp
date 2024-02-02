"use client";
import { Icons } from "@/components/icons";
import { useContext, useRef, useState } from "react";
import Slider from "react-slick";

import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const MobileSlider = ({ children, slidesToShow }) => {
  const slider = useRef(null);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const { theme, setTheme } = useContext(MyContext);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
  };

  return (
    <div className={cn(styles.mobileSlider, theme ? styles.mobileSlider : "")}>
      <div className={cn(styles.sliderSection)}>
        <Slider {...settings} ref={slider}>
          {children}
        </Slider>
      </div>
      <div className={styles.sliderArrow}>
        <button
          className={activeSlide === 0 ? styles.arrowDisabled : styles.button}
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
  );
};

export default MobileSlider;
