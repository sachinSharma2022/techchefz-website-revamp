"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import Slider from "react-slick";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const SolutionTechnologies = () => {
  const serviceCard = [
    {
      icon: <Icons.Market width={56} height={56} />,
      sbTitle: "4+",
      sbText: "Years of Experience in Market.",
    },
    {
      icon: <Icons.MarketPlace width={56} height={56} />,
      sbTitle: "1M+",
      sbText: "Users growth in marketplace.",
    },
    {
      icon: <Icons.Rates width={56} height={56} />,
      sbTitle: "300%",
      sbText: "Elevated Conversion Rates.",
    },
    {
      icon: <Icons.Performance width={56} height={56} />,
      sbTitle: "120%",
      sbText: "Enhanced SaaS CRO Performance.",
    },
  ];
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
    <section className={`${styles.solutionTechnologiesStyle}`}>
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div className="row">
            <div className="col-md-12 col-12">
              <p className={styles.ProjectHighlight}>Technologies</p>
            </div>

            <div className="col-md-8 col-12">
              <h2 className={styles.datingText}>
                Driving Technological Advancements for the Future
              </h2>
            </div>
            <div className={`${styles.careerBtn} col-md-4 col-12`}>
              <Button variant="outline" size="md">
                Explore Technology <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div>
              <p className={styles.ourNumbersText}>
                In a world where technology evolves at the blink of an eye,
                Techchefz stands at the helm, steering the course towards a
                brighter, more connected future.
              </p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {serviceCard.map((data, index) => (
                  <div key={index} className={styles.serviceBox}>
                    <div className={styles.numberCardFlex}>
                      <h2 className={styles.sbTitle}>{data.sbTitle}</h2>
                      <div className={styles.bgIcon}>{data.icon}</div>
                    </div>

                    <p className={styles.sbText}>{data.sbText}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src="/images/our-number.jpg"
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
          </div>

          <div className={`${styles.ourNumberOption} service-mobile-slider`}>
            <Slider {...settings}>
              {serviceCard.map((data, index) => (
                <div key={index} className={styles.serviceBox}>
                  <div className={styles.numberCardFlex}>
                    <h2 className={styles.sbTitle}>{data.sbTitle}</h2>
                    <div className={styles.bgIcon}>{data.icon}</div>
                  </div>

                  <p className={styles.sbText}>{data.sbText}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionTechnologies;
