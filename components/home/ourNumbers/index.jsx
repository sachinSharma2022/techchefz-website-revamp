"use client";

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

  // const serviceCard = [
  //   {
  //     icon: <Icons.Market width={56} height={56} />,
  //     sbTitle: "4+",
  //     sbText: "Years of Experience in Market.",
  //   },
  //   {
  //     icon: <Icons.MarketPlace width={56} height={56} />,
  //     sbTitle: "1M+",
  //     sbText: "Users growth in marketplace.",
  //   },
  //   {
  //     icon: <Icons.Rates width={56} height={56} />,
  //     sbTitle: "300%",
  //     sbText: "Elevated Conversion Rates.",
  //   },
  //   {
  //     icon: <Icons.PerformanceIcon width={56} height={56} />,
  //     sbTitle: "120%",
  //     sbText: "Enhanced SaaS CRO Performance.",
  //   },
  // ];
  const settings = {
    className: "center",
    centerPadding: "0px",
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "15px",
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
              <p className={styles.ProjectHighlight}>{carrer.title}</p>
              <h2 className={styles.datingText}>
              {carrer.description}
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
                src={base_Uri+experience[0]?.Image?.data?.attributes?.formats?.small?.url}
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
                  <div key={index} className={styles.serviceBox}>
                    <div className={styles.numberCardFlex}>
                      <h2 className={styles.sbTitle}>{data.Title}</h2>
                      <div className={styles.bgIcon}><img src={base_Uri+data?.Image?.data?.attributes?.url} alt="" /></div>
                    </div>

                    <p className={styles.sbText}>{data.Description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.ourNumberOption} service-mobile-slider`}>
            <Slider {...settings}>
              {experience[0].Vews.map((data, index) => (
                <div key={index} className={styles.serviceBox}>
                  <div className={styles.numberCardFlex}>
                      <h2 className={styles.sbTitle}>{data.Title}</h2>
                      <div className={styles.bgIcon}><img src={base_Uri+data?.Image?.data?.attributes?.url} alt="" /></div>
                    </div>

                    <p className={styles.sbText}>{data.Description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
