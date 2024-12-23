"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { base_Uri } from "@/lib/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.scss";

const NewsMedia = ({ props }) => {
  console.log("hiii", props);
  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 690px)" });
  const [currentPage, setCurrentPage] = useState(0);
  const swiperRef = useRef(null);

  // const sliderData = [
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Artificial Intelligence",
  //     date: "28 Nov, 2024",
  //     title:
  //       "AI-Powered Customer Journeys: How TechChefz Delivers Personalized Experiences",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Digital Transformation",
  //     date: "28 Nov, 2024",
  //     title: "The Future of Digital Transformation in 2025",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Digital Transformation",
  //     date: "28 Nov, 2024",
  //     title:
  //       "5 Digital Transformation Challenges Businesses Face and How to Overcome Them",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Artificial Intelligence",
  //     date: "28 Nov, 2024",
  //     title:
  //       "AI-Powered Customer Journeys: How TechChefz Delivers Personalized Experiences",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Digital Transformation",
  //     date: "28 Nov, 2024",
  //     title: "The Future of Digital Transformation in 2025",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Digital Transformation",
  //     date: "28 Nov, 2024",
  //     title:
  //       "5 Digital Transformation Challenges Businesses Face and How to Overcome Them",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Artificial Intelligence",
  //     date: "28 Nov, 2024",
  //     title:
  //       "AI-Powered Customer Journeys: How TechChefz Delivers Personalized Experiences",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Digital Transformation",
  //     date: "28 Nov, 2024",
  //     title: "The Future of Digital Transformation in 2025",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Digital Transformation",
  //     date: "28 Nov, 2024",
  //     title:
  //       "5 Digital Transformation Challenges Businesses Face and How to Overcome Them",
  //   },
  // ];

  const slidesPerPage = isMobileScreen ? 1 : 3;
  const totalPages = Math.ceil(props.Slider.length / slidesPerPage);

  const goToPage = (index) => {
    if (swiperRef.current) {
      setCurrentPage(index);
      swiperRef.current.swiper.slideTo(index * slidesPerPage);
    }
  };

  return (
    <section
      className={cn(styles.newsMedia, theme ? styles.newsMediaDark : "")}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.headingSec}>
            <h6 className={cn(styles.subTitle, "gradient-text")}>
              {props?.Title}
            </h6>
            <h3 className={cn(styles.title, "gradient-text")}>
              {props?.SubTitle}
            </h3>
          </div>
        </TextRevel>

        <div className={cn(styles.imageSection)}>
          <ImageCustom
            height={500}
            width={500}
            // src={props?.Image?.data?.attributes?.url}
            src={
              props?.Image?.data?.attributes?.url
                ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
                : `${base_Uri}/`}
            alt=""

            className={styles.imageStyle}
          />
          <div className={styles.mediaContent}>
            <h6 className={styles.subTitle}>
              <span className={cn(styles.textBlue, "gradient-text")}>
                {props?.Technology}
              </span>
              <span className={styles.circle} />
              {props?.TechnologyDate}
            </h6>
            <h4 className={styles.title}>
              {props?.Description}
            </h4>
          </div>
        </div>

        <div className={styles.sliderSection}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={slidesPerPage}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            onSlideChange={(swiper) =>
              setCurrentPage(Math.floor(swiper.activeIndex / slidesPerPage))
            }
            loop={false}
            ref={swiperRef}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              769: {
                slidesPerView: slidesPerPage,
              },
            }}
          >
            {props.Slider.map((item, index) => (
              <SwiperSlide key={index} className={styles.cardStyle}>
                <ImageCustom
                  height={500}
                  width={500}
                  src={item.Image?.data?.attributes?.url
                    ? `${base_Uri}${item.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`}
                  alt={item.title}
                  className={styles.sliderImage}
                />
                <div className={styles.textCard}>
                  <div className={styles.flexText}>
                    <p className={cn(styles.textBlue, "gradient-text")}>
                      {item.Technology}
                    </p>
                    <span className={styles.circle} />
                    <p className={styles.textDate}>{item.TechnologyDate}</p>
                  </div>
                  <h3 className={styles.cardTitleStyle}>{item.Description}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.customSliderNav}>
            <button
              onClick={() => goToPage(currentPage - 1)}
              className={cn(
                styles.btn,
                currentPage === 0 ? styles.btnDisabled : ""
              )}
              disabled={currentPage === 0}
            >
              <Icons.ArrowLeft />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={cn(
                  styles.page,
                  currentPage === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                )}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              className={cn(
                styles.btn,
                currentPage === totalPages - 1 ? styles.btnDisabled : ""
              )}
              disabled={currentPage === totalPages - 1}
            >
              <Icons.ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsMedia;
