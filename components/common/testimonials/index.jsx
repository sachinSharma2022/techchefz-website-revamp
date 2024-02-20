"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import React, { useContext } from "react";
import { base_Uri } from "@/lib/constants";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";

const Testimonials = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section
      className={cn(
        styles.testimonialsStyle,
        theme ? styles.testimonialsStyleDark : "",
        theme ? "testimonials-style-dark" : "",
        "testimonial-style",
        props.className
      )}
    >
      <div className={cn("primary-container", styles.testimonialContainer)}>
        <div className="row">
          <div className="col-12 col-sm-3">
            <div className={styles.infoSection}>
              <div className={styles.testimonialsLeft}>
                <h6
                  className={cn(styles.projectHighlight, "gradient-text")}
                  dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}
                ></h6>
                <div
                  className={cn(styles.testimonialsHeading, "gradient-text")}
                >
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: `${props[0]?.SubTitle}`,
                    }}
                  ></h3>
                </div>
                <p className={styles.testimonialsText}>
                  {props[0]?.Description}
                </p>
              </div>

              {/* Mobile Slider */}
              <div className={styles.mobileSlider}>
                <Swiper
                  spaceBetween={5}
                  slidesPerView={1}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={false}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  onSwiper={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  {props[0]?.Testimonials.map((data, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.testimonialCardBox}>
                        <div>
                          <div className={styles.commaImg}>
                            <Icons.Comma width={29} height={24} />
                          </div>
                          <p className={styles.customerText}>
                            {data.Description}
                          </p>
                        </div>
                        <div className={styles.customerProfile}>
                          <div className={styles.customerImg}>
                            <ImageCustom
                              src={
                                data?.ProfileImage?.data?.attributes?.url
                                  ? `${base_Uri}${data?.ProfileImage?.data?.attributes?.url}`
                                  : `${base_Uri}/`
                              }
                              width={100}
                              height={100}
                              alt="profileImg"
                            />
                          </div>
                          <p className={styles.customerRole}>
                            {data.CustomerRole}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* End Mobile Slider */}

              <div className={styles.sliderController}>
                <button
                  ref={navigationPrevRef}
                  className="btn btn-arrow btn-back"
                >
                  <Icons.ArrowLeft size={20} className="asset-white" />
                </button>
                <button
                  ref={navigationNextRef}
                  className="btn btn-arrow btn-move"
                >
                  <Icons.ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-9">
            <div
              className={cn(
                styles.testimonialsDesktopSlider,
                "testimonials-slider"
              )}
            >
              <Swiper
                effect={"coverflow"}
                spaceBetween={5}
                slidesPerView={2}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: -35,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                  scale: 1.03,
                }}
                breakpoints={{
                  1900: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    coverflowEffect: {
                      rotate: -10,
                      stretch: 0,
                      depth: 90,
                      modifier: 1,
                      scale: 0.98,
                    },
                  },
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                onSwiper={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {props[0]?.Testimonials.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.testimonialCardBox}>
                      <div>
                        <div className={styles.commaImg}>
                          <Icons.Comma width={29} height={24} />
                        </div>
                        <p className={styles.customerText}>
                          {data.Description}
                        </p>
                      </div>
                      <div className={styles.customerProfile}>
                        <div className={styles.customerImg}>
                          <ImageCustom
                            src={
                              data?.ProfileImage?.data?.attributes?.url
                                ? `${base_Uri}${data?.ProfileImage?.data?.attributes?.url}`
                                : `${base_Uri}/`
                            }
                            width={100}
                            height={100}
                            alt="profileImg"
                          />
                        </div>
                        <p className={styles.customerName}>
                          {data.ProfileName}
                        </p>
                        <p className={styles.customerRole}>
                          {data.Designation}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
