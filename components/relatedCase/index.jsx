"use client";
import CaptionCard from "@/components/ui/captionCard";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TextRevel from "../ui/sectionAnimation";
import styles from "./style.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Icons } from "../icons";

const RelatedCase = ({ props, className, sliderClassName, params }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={cn(
        styles.relatedCase,
        theme ? styles.relatedCaseDark : "",
        className ? className : styles.spaceStyle
      )}
    >
      <div className={cn("primary-container relative")}>
        <TextRevel>
          <div className={styles.headSection}>
            <div>
              <h6
                className={cn(styles.relatedCaseTitle, "gradient-text")}
                dangerouslySetInnerHTML={{
                  __html: `${props[0]?.attributes?.CaseStudy?.Title}`,
                }}
              ></h6>
              <h3
                className={cn(styles.relatedCaseHeading, "gradient-text")}
                dangerouslySetInnerHTML={{
                  __html: `${props[0]?.attributes?.CaseStudy?.Description}`,
                }}
              ></h3>
            </div>

            <div className="slider-arrow">
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
        </TextRevel>

        <div
          className={cn(
            styles.relatedCaseSlider,
            sliderClassName,
            "related-case-slider"
          )}
        >
          <Swiper
            slidesPerView={3.5}
            spaceBetween={0}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            pagination={false}
            modules={[Navigation]}
            breakpoints={{
              767: {
                slidesPerView: 1,
              },
              1199: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2.4,
              },
              1700: {
                slidesPerView: 3.4,
              },
            }}
            className="mySwiper"
          >
            {props
              .filter((data) => params?.caseStudy != data.id)
              .map((data, index) => (
                <SwiperSlide key={index}>
                  <CaptionCard
                    className={styles.cardStyle}
                    imgSrc={
                      data?.attributes?.Banner?.PortfolioImage?.data?.attributes
                        ?.url
                        ? base_Uri +
                          data?.attributes?.Banner?.PortfolioImage?.data
                            ?.attributes?.url
                        : `${base_Uri}/`
                    }
                    title={data?.attributes?.Banner?.PortfolioTitle}
                    redirect={data.id}
                    textStyle={styles.textStyle}
                    params={params}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedCase;
