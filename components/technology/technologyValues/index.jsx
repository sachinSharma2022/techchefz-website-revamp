"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
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

const TechnologyValues = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { theme, setTheme } = useContext(MyContext);
  const valueData = [
    {
      icon: <Icons.Market width={56} height={56} />,
      title: "Innovation",
      imgUrl:
        "https://images.unsplash.com/photo-1494389945381-0fe114b8ea4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fElubm92YXRpb258ZW58MHx8MHx8fDA%3D",
      content:
        "We believe in a customer-centric ethic without and people-centric paradigm within.",
    },
    {
      icon: <Icons.Rates width={56} height={56} />,
      title: "Customer Success",
      imgUrl:
        "https://images.unsplash.com/photo-1457131760772-7017c6180f05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEN1c3RvbWVyJTIwU3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
      content:
        "We believe in a customer-centric ethic without and people-centric paradigm within.",
    },
    {
      icon: <Icons.PerformanceIcon width={56} height={56} />,
      title: "Excellence in Delivery",
      imgUrl: "/images/innovation.png",
      content:
        "We believe in a customer-centric ethic without and people-centric paradigm within.",
    },
  ];
  return (
    <section className={`${styles.technologyValues} ${theme ? styles.technologyValuesDark : ""} technology-value`}>
      <div className={cn("primary-container")}>
        <div className={styles.headSection}>
          <h6 className={styles.valuesTitle}>Our Values</h6>
          <h3 className={styles.valuesHeading}>
            Innovative IT Solutions for Future
          </h3>
          <p className={styles.valuesText}>
            We believe in a customer-centric ethic without and people-centric
            paradigm within. With a strong sense of community, ownership, and
            collaboration our people work in a spirit of co-creation,
            co-innovation, and co-development to engineer next-generation
            software products with the help of accelerators.
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
            {valueData.map((data, index) => (
              <SwiperSlide key={index} className={styles.valuesImg}>
                <ImageCustom
                  src={data.imgUrl}
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
            {valueData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="progress-bar-animation" />
                <div className={styles.infoSec}>
                  <div className={styles.icons}>{data.icon}</div>
                  <h6 className={styles.subTitle}>{data.title}</h6>
                  <p className={styles.content}>{data.content} </p>
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
