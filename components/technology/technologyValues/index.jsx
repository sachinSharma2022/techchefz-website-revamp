"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { Icons } from "@/components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

const TechnologyValues = () => {
  const valueData = [
    {
      icon: <Icons.Market width={56} height={56} />,
      title: "Innovation",
      content:
        "We believe in a customer-centric ethic without and people-centric paradigm within.",
    },
    {
      icon: <Icons.Rates width={56} height={56} />,
      title: "Customer Success",
      content:
        "We believe in a customer-centric ethic without and people-centric paradigm within.",
    },
    {
      icon: <Icons.Performance width={56} height={56} />,
      title: "Excellence in Delivery",
      content:
        "We believe in a customer-centric ethic without and people-centric paradigm within.",
    },
  ];
  return (
    <section className={styles.values}>
      <div className="row">
        <div className="col-md-7 col-lg-7">
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
      </div>
      <div className="row justify-content-between">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          autoplay={2000}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.slideGrid}
        >
          {valueData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className={styles.valuesImg}>
                <ImageCustom
                  src={"/images/innovation.png"}
                  width={1000}
                  height={500}
                  alt="img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {valueData.map((data, index) => (
          <div key={index} className="col-md-4 col-lg-4">
            <div className={styles.icons}>{data.icon}</div>

            <h6 className={styles.subTitle}>{data.title}</h6>
            <p className={styles.content}>{data.content} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyValues;
