"use client";

import JobCard from "@/components/common/jobCard";
import { Icons } from "@/components/icons";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import styles from "./style.module.scss";

const MoreJobs = ({ props, params }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <>
      <div
        className={cn(
          styles.jobDetailContainer,
          theme ? styles.jobDetailDarkContainer : ""
        )}
      >
        <div className={cn("primary-container", styles.containerStyle)}>
          <div className={styles.headerStyle}>
            <TextRevel>
              <div className={styles.titleSection}>
                <div>
                  <h6>{props[0]?.attributes?.MoreDetail[0]?.Title}</h6>
                  <h3>{props[0]?.attributes?.MoreDetail[0]?.SubTitle}</h3>
                </div>
              </div>
            </TextRevel>

            <div className="slider-arrow show-mobile-desktop">
              <button
                aria-label="Move Left"
                title="Move Left"
                className={cn(styles.button, "arrow-left arrow")}
              >
                <Icons.ArrowLeft />
              </button>
              <button
                aria-label="Move Right"
                title="Move Right"
                className={cn(styles.button, "arrow-right arrow")}
              >
                <Icons.ArrowRight fill="black" stroke="black" />
              </button>
            </div>
          </div>

          <div className={cn(styles.sliderSection)}>
            <Swiper
              slidesPerView={3.5}
              spaceBetween={0}
              navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
              pagination={false}
              modules={[Navigation]}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                1199: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1700: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              {props
                .filter((value) => {
                  return params?.careersDetail != value.id;
                })
                .map((value, index) => (
                  <SwiperSlide key={index}>
                    <JobCard
                      title={value?.attributes?.DeveloperApply[0]?.Title}
                      content={value?.attributes?.Cards?.Description}
                      exp={
                        value?.attributes?.DeveloperApply[0]?.Developerinner[0]
                          ?.Title
                      }
                      location={
                        value?.attributes?.DeveloperApply[0]?.Developerinner[1]
                          ?.Title
                      }
                      link={value.id}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider-arrow show-mobile-only">
              <button
                aria-label="Move Left"
                title="Move Left"
                className={cn(styles.button, "arrow-left arrow")}
              >
                <Icons.ArrowLeft />
              </button>
              <button
                aria-label="Move Right"
                title="Move Right"
                className={cn(styles.button, "arrow-right arrow")}
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
