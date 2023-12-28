"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import React from "react";
// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";

const Testimonials = () => {
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
    <section className={`${styles.testimonialsStyle} testimonial-style`}>
      <div className="row">
        <div className="col-sm-3">
          <div className={styles.infoSection}>
            <div className={styles.testimonialsLeft}>
              <p className={styles.ProjectHighlight}>Testimonials</p>
              <div className={styles.testimonialsHeading}>
                <h3>Voices of Delightful Experiences.</h3>
              </div>
              <p className={styles.testimonialsText}>
                Delve into our case studies to witness firsthand how we&apos;ve
                tackled challenges, delivered solutions, and achieved measurable
                success. Each story is a testament to our commitment, expertise,
                and the transformative impact.
              </p>
            </div>

            <div className={styles.sliderController}>
              <button ref={navigationPrevRef} className="btn btn-primary">
                <Icons.ArrowLeft className="asset-white" />
              </button>
              <button ref={navigationNextRef} className="btn btn-primary">
                <Icons.ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-9">
          <div className="testimonials-slider">
            <Swiper
              effect={"coverflow"}
              spaceBetween={20}
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
                      <p className={styles.customerName}>{data.CustomerName}</p>
                      <p className={styles.customerRole}>{data.CustomerRole}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
