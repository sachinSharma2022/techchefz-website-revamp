"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Slider from "react-slick";
import { base_Uri } from "@/lib/constants";

import MobileSlider from "@/components/common/mobileSlider";
import ServiceInfoCard from "@/components/common/serviceInfoCard";
import styles from "./style.module.scss";
import { base_Url } from "@/lib/constants";

const SolutionTechnologies = ({ props }) => {
  console.log("neee", props);
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
      className={`${styles.solutionTechnologiesStyle} ${
        theme ? styles.solutionTechnologiesDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div>
            <h6
              className={cn(styles.projectHighlight, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>

            <h2
              className={cn(styles.datingText, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h2>
          </div>

          <div className={`${styles.careerBtn}`}>
            <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
              {props?.Button} <Icons.ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div>
              <p className={styles.ourNumbersText}>{props?.Description}</p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {props?.TechnologyInner?.map((data, index) => (
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.Title}
                    icon={
                      data?.Image?.data?.attributes?.url
                        ? `${base_Url}${data?.Image?.data?.attributes?.url}`
                        : `${base_Url}/`
                    }
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
        </div>
      </div>

      {/* <div className={`${styles.ourNumberOption} service-mobile-slider`}>
            <Slider {...settings}>
              {props?.TechnologyInner?.map((data, index) => (
                <ServiceInfoCard
                  key={index}
                  sbTitle={data.Title}
                  icon= {data?.Image?.data?.attributes?.url?`${base_Url}${data?.Image?.data?.attributes?.url}`:`${base_Url}/`}
                 
                  sbText={data.Description}
                />
              ))}
            </Slider>
          </div> */}
    </section>
  );
};

export default SolutionTechnologies;
