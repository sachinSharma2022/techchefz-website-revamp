"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { base_Uri } from "@/lib/constants";
import Image from "next/image";
import { base_Url } from "@/lib/constants";
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

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

const TechnologyValues = ({props}) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { theme, setTheme } = useContext(MyContext);
  // const valueData = [
  //   {
  //     icon: <Icons.Market width={56} height={56} />,
  //     title: "Innovation",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     content:
  //       "We believe in a customer-centric ethic without and people-centric paradigm within.",
  //   },
  //   {
  //     icon: <Icons.Rates width={56} height={56} />,
  //     title: "Customer Success",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     content:
  //       "We believe in a customer-centric ethic without and people-centric paradigm within.",
  //   },
  //   {
  //     icon: <Icons.MarketPlace width={56} height={56} />,
  //     title: "Excellence in Delivery",
  //     imgUrl:
  //       "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     content:
  //       "We believe in a customer-centric ethic without and people-centric paradigm within.",
  //   },
  // ];
  return (
    <section
      className={cn(
        styles.technologyValues,
        theme ? styles.technologyValuesDark : "",
        "technology-value",
        theme ? "technology-value-dark" : ""
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.headSection}>
          <h6 className={cn(styles.valuesTitle, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>
            </h6>
          <h3 className={cn(styles.valuesHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}`}}>
          </h3>
          <p className={styles.valuesText}>
          {props?.Description}
          </p>
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
                  src={data?.SliderImage?.data.attributes.url?`${base_Uri}${data?.SliderImage?.data.attributes.url}`:`${base_Uri}/`}
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
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="slide-thumb-grid"
          >
            {props?.TechnologyVal?.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="progress-bar-animation" />
                <div className={styles.infoSec}>
                  <div className={styles.icons}>
                  <ImageCustom height={100}  width={100} src={data?.Images?.data?.attributes?.url?`${base_Url}${data?.Images?.data?.attributes?.url}`:`${base_Url}/`}/>
                  </div>
                  <h6 className={styles.subTitle}>{data?.Title}</h6>
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