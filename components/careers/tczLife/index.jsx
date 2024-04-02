"use client";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { base_Url } from "@/lib/constants";
import { useContext, useState } from "react";

import PrimaryModal from "@/components/ui/primaryModal";
import TextRevel from "@/components/ui/sectionAnimation";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import styles from "./style.module.scss";

const TczLife = ({ props }) => {
  const [isOpen, setIsOpen] = useState(-1);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.tczLife} ${theme ? styles.tczLifeDark : ""} `}
    >
      <div className={cn(styles.tczLifeSliderSection, "row")}>
        <div className={cn(styles.tczActionSection, "col-sm-6")}>
          <TextRevel>
            <div>
              <h6
                className={cn(styles.tczLifeTitle, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
              ></h6>
              <h3
                className={cn(styles.tczLifeHeading, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
              ></h3>
            </div>
          </TextRevel>

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
        <div className={cn(styles.sliderSection, "col-sm-6 tczLifeSlider")}>
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
                slidesPerView: 1.5,
              },
              1700: {
                slidesPerView: 2.2,
              },
            }}
            className="mySwiper"
          >
            {props?.VideoSlider?.map((data, index) => (
              <SwiperSlide key={index}>
                <button
                  className={styles.videoWhapper}
                  onClick={() => setIsOpen(index)}
                >
                  <div>
                    <video
                      width="100"
                      height="100"
                      muted
                      className="video-block"
                    >
                      <source
                        src={
                          data?.Video?.data?.attributes?.url
                            ? `${base_Url}${data.Video.data.attributes.url}`
                            : `${base_Url}/`
                        }
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className={cn(styles.videoButton)}>
                    <Icons.VideoButton />
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {props?.VideoSlider?.map((data, index) => (
          <PrimaryModal
            open={isOpen === index}
            onClose={() => setIsOpen(-1)}
            key={index}
          >
            <video
              width="100"
              height="100"
              playsInline
              autoPlay
              loop
              className="video-block"
            >
              <source
                src={
                  data?.Video?.data?.attributes?.url
                    ? `${base_Url}${data.Video.data.attributes.url}`
                    : `${base_Url}/`
                }
                type="video/mp4"
              />
            </video>
          </PrimaryModal>
        ))}
      </div>

      <TextRevel>
        <div className={styles.tczLifeContent}>
          <p>{props?.Description}</p>
        </div>
      </TextRevel>
    </section>
  );
};

export default TczLife;
