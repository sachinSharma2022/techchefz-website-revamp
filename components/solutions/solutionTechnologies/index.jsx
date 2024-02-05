"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Slider from "react-slick";
import { base_Uri } from "@/lib/constants";

import ServiceInfoCard from "@/components/common/serviceInfoCard";
import styles from "./style.module.scss";

const SolutionTechnologies = ({ props }) => {
  console.log("neee", props);
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
      className={`${styles.solutionTechnologiesStyle} ${theme ? styles.solutionTechnologiesDark : ""
        }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div className="row">
            <div className="col-md-12 col-12">
              <p className={styles.ProjectHighlight}>{props?.Title}</p>
            </div>

            <div className="col-md-8 col-12">
              <h2 className={styles.datingText}>
                {props?.SubTitle}
              </h2>
            </div>
            <div className={`${styles.careerBtn} col-md-4 col-12`}>
              <Button variant="outline" size="md">
                {props?.Button} <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div>
              <p className={styles.ourNumbersText}>
                {props?.Description}
              </p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {props?.TechnologyInner?.map((data, index) => (
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.Title}
                    icon={`${base_Uri}${data?.Image?.data.attributes.url}`}

                    sbText={data.Description}
                  />
                ))}
              </div>
            </div>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src={`${base_Uri}${props?.image.data.attributes.url}`}
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
          </div>

          {/* <div className={`${styles.ourNumberOption} service-mobile-slider`}>
            <Slider {...settings}>
              {serviceCard.map((data, index) => (
                <ServiceInfoCard
                  key={index}
                  sbTitle={data.sbTitle}
                  icon={data.icon}
                  sbText={data.sbText}
                />
              ))}
            </Slider>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SolutionTechnologies;
