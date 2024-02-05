"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import React, { useContext } from "react";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";

const Testimonials = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const serviceCard = [
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
  ];

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
          <div className="col-12 col-sm-3 col-md-12">
            <div className={styles.infoSection}>
              <div className={styles.testimonialsLeft}>
                <p className={styles.projectHighlight}>Testimonials</p>
                <div className={styles.testimonialsHeading}>
                  <h3>{props.title}</h3>
                </div>
                <p className={styles.testimonialsText}>{props.description}</p>
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
                  {serviceCard.map((data, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.testimonialCardBox}>
                        <div className={styles.commaImg}>
                          <Icons.Comma width={29} height={24} />
                        </div>
                        <p className={styles.customerText}>
                          {data.CustomerText}
                        </p>
                        <div className={styles.customerProfile}>
                          <div className={styles.customerImg}>
                            <ImageCustom
                              src={data.img}
                              width={100}
                              height={100}
                              alt="profileImg"
                            />
                          </div>
                          <p className={styles.customerName}>
                            {data.CustomerName}
                          </p>
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
                  className="btn btn-primary btn-back"
                >
                  <Icons.ArrowLeft size={20} className="asset-white" />
                </button>
                <button
                  ref={navigationNextRef}
                  className="btn btn-primary btn-move"
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
                {serviceCard.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.testimonialCardBox}>
                      <div className={styles.commaImg}>
                        <Icons.Comma width={29} height={24} />
                      </div>
                      <p className={styles.customerText}>{data.CustomerText}</p>
                      <div className={styles.customerProfile}>
                        <div className={styles.customerImg}>
                          <ImageCustom
                            src={data.img}
                            width={100}
                            height={100}
                            alt="profileImg"
                          />
                        </div>
                        <p className={styles.customerName}>
                          {data.CustomerName}
                        </p>
                        <p className={styles.customerRole}>
                          {data.CustomerRole}
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
