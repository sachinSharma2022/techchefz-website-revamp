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

const AemTestimonials = ({ props }) => {

  // console.log("hii samu", props);
  const { theme, setTheme } = useContext(MyContext);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  // const serviceCard = [
  //   {
  //     CustomerText:
  //       "Worked with TCZ on two business critical website development projects. The TCZ team is a group of experts in their respective domains and have helped us with excellent end-to-end development of a website right from the conceptualization to implementation and maintenance.",
  //     img: "/images/profile.png",
  //     CustomerName: "Dr. Kunal Joshi",
  //     CustomerRole: "Healthcare Marketing & Strategy Professional",
  //   },
  //   {
  //     CustomerText:
  //       "TCZ helped us with our new website launch in a seamless manner. Through all our discussions, they made sure to have the website designed as we had envisioned it to be. Thank you team TCZ.",
  //     img: "/images/profile2.webp",
  //     CustomerName: "Dr. Sarita Ahlawat",
  //     CustomerRole: "Managing Director and Co-Founder, Botlab Dynamics",
  //   },
  //   {
  //     CustomerText:
  //       "Working with TechChefz Digital on our website has been an absolute pleasure! With a site involving thousands of pages and complex requirements, their team has done an incredible job making the process smooth and efficient.",
  //     img: "/images/profile3.webp",
  //     CustomerName: "Sarabpreet Singh",
  //     CustomerRole: "Webmaster, Manipal Institute",
  //   },
  // ];

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
                <p className={styles.projectHighlight}>{props?.Title}</p>
                <div
                  className={cn(styles.testimonialsHeading, "gradient-text")}
                >
                  <h3 dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}>

                    {/* What Our <span>Clients</span> Say about our{" "}
                    <span>AEM Services</span> */}
                  </h3>
                  <p className={styles.testimonialsText}>
                    {props?.Description}
                  </p>
                </div>
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
                  {props?.Testimonials?.map((data, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.testimonialCardBox}>
                        <div className={styles.commaImg}>
                          <Icons.Comma width={29} height={24} />
                        </div>
                        <p className={styles.customerText}>
                          {data.Description}
                        </p>
                        <div className={styles.customerProfile}>
                          <div className={styles.customerImg}>
                            <ImageCustom
                              // src={data?.ProfileImage?.data?.attributes?.url}
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
                  rotate: -30,
                  stretch: 0,
                  depth: 160,
                  modifier: 1,
                  slideShadows: true,
                  scale: 1.02,
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
                {props?.Testimonials.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.testimonialCardBox}>
                      <div className={styles.commaImg}>
                        <Icons.Comma width={29} height={24} />
                      </div>
                      <p className={styles.customerText}>{data.Description}</p>
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

export default AemTestimonials;
