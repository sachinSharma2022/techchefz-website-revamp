"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri, base_Url } from "@/lib/constants";
import { useContext } from "react";
// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

const TechnologyValues = ({ props, wrapperStyle }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { theme, setTheme } = useContext(MyContext);
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section
      className={cn(
        styles.technologyValues,
        theme ? styles.technologyValuesDark : "",
        "technology-value",
        theme ? "technology-value-dark" : "",
        wrapperStyle
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.headSection}>
          <h6
            className={cn(styles.valuesTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h6>
          <h3
            className={cn(styles.valuesHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
          ></h3>
          <p className={styles.valuesText}>{props?.Description}</p>
        </div>

        <div className={styles.sliderSection}>
          <Swiper
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay, Thumbs, FreeMode]}
            className={styles.slideGrid}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {props?.TechnologyVal?.map((data, index) => (
              <SwiperSlide key={index} className={styles.valuesImg}>
                <ImageCustom
                  src={
                    data?.SliderImage?.data.attributes.url
                      ? `${base_Uri}${data?.SliderImage?.data.attributes.url}`
                      : `${base_Uri}/`
                  }
                  width={1000}
                  height={1000}
                  alt="img"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={isBigScreen ? 4 : 1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="slide-thumb-grid"
          >
            {props?.TechnologyVal?.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="progress-bar-animation" />
                <div className={styles.infoSec}>
                  <ImageCustom
                    height={100}
                    width={100}
                    className={styles.icons}
                    src={
                      data?.Images?.data?.attributes?.url
                        ? `${base_Url}${data?.Images?.data?.attributes?.url}`
                        : `${base_Url}/`
                    }
                  />
                  <h4 className={styles.subTitle}>{data?.Title}</h4>
                  <p className={styles.content}>{data?.Description} </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TechnologyValues;
