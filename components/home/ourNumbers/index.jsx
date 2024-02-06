"use client";

import ServiceInfoCard from "@/components/common/serviceInfoCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const OurNumbers = ({carrer,experience}) => {
  const { theme, setTheme } = useContext(MyContext);
  const settings = {
    className: "center",
    centerPadding: "0px",
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <Icons.SliderArrow width="15" height="15" />
      </div>
    ),
    prevArrow: (
      <div>
        <Icons.SliderArrow width="15" height="15" />
      </div>
    ),

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <section
      className={`${styles.numberStyle} ${theme ? styles.numberStyleDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div className="row justify-content-between align-items-end">
            <div className="col-md-8 col-lg-8 col-12">
              <p className={styles.ProjectHighlight}  dangerouslySetInnerHTML={{ __html: `${carrer?.title}`}}>
                </p>
              <h2 className={styles.datingText}  dangerouslySetInnerHTML={{ __html: `${carrer?.description}`}}>
              </h2>
            </div>

            <div className="col-md-4 col-lg-4 col-12 text-end">
              <Button variant="outline" size="md">
              {carrer.button} <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src={base_Uri+experience[0]?.Image?.data?.attributes?.url}
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
            <div>
              <p className={styles.ourNumbersText}>
               {experience.Description}
              </p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {experience[0].Vews.map((data, index) => (
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.Title}
                    icon={base_Uri+data?.Image?.data?.attributes?.url}
                    sbText={data.Description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.ourNumberOption} service-mobile-slider`}>
            <Slider {...settings}>
              {experience[0].Vews.map((data, index) => (
                <ServiceInfoCard
                key={index}
                    sbTitle={data.Title}
                    icon={base_Uri+data?.Image?.data?.attributes?.url}
                    sbText={data.Description}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
