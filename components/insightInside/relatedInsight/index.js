"use client";
import { Icons } from "@/components/icons";
import CaptionCard from "@/components/ui/captionCard";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import styles from "./style.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const RelatedInsight = ({ props, className, sliderClassName, params }) => {
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
                  __html: `${props[0]?.attributes?.RelatedInsight?.Title}`,
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
              .filter(
                (data) =>
                  params?.insightInside != data.id &&
                  data?.attributes?.InsightOverview[0]?.RelatedInsight == true
              )
              .map((data, index) => (
                <SwiperSlide key={index}>
                  <CaptionCard
                    className={styles.cardStyle}
                    imgSrc={
                      data?.attributes?.InsightOverview[0]?.Image?.data
                        ?.attributes?.url
                        ? base_Uri +
                          data?.attributes?.InsightOverview[0]?.Image?.data
                            ?.attributes?.url
                        : `${base_Uri}/`
                    }
                    title={data?.attributes?.InsightOverview[0]?.Title}
                    redirect={data.id}
                    textStyle={styles.textStyle}
                    params={params}
                    postDate
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedInsight;
