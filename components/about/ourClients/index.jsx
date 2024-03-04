"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Slider from "react-slick";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import TextRevel from "@/components/ui/sectionAnimation";

const OurClients = ({ props }) => {
  console.log("aa", props);
  const { theme } = useContext(MyContext);
  const sliderLeft = {
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = {
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    slidesToShow: 3.5,
    slidesToScroll: -1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className={cn(styles.ourClients, theme ? styles.ourClientsDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <TextRevel>
            <div className={styles.contentSec}>
              <h6
                className={styles.subHeading}
                dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
              ></h6>
              <h3
                className={styles.heading}
                dangerouslySetInnerHTML={{ __html: `${props?.subTitle}` }}
              ></h3>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
              ></p>
              <Link href={props?.BtnLink}>
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  size="lg"
                >
                  {props?.Btn} <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </TextRevel>

          <div className={styles.clientSection}>
            <TextRevel>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: `${props?.SubDescription}` }}
              ></p>
            </TextRevel>

            <div className={cn(styles.logoAnimation, "logo-animation")}>
              <div className={styles.logoSection}>
                <Slider {...sliderLeft}>
                  {props?.clientlogo?.map((item, index) => (
                    <div key={index} className={styles.teamImg}>
                      <ImageCustom
                        src={
                          item?.Image?.data?.attributes?.url
                            ? `${base_Uri}${item?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={240}
                        height={320}
                        alt="team-member"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.logoSection}>
                <Slider {...sliderRight}>
                  {props?.clientlogo?.map((item, index) => (
                    <div key={index} className={styles.teamImg}>
                      <ImageCustom
                        src={
                          item?.Image?.data?.attributes?.url
                            ? `${base_Uri}${item?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={240}
                        height={320}
                        alt="team-member"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.logoSection}>
                <Slider {...sliderLeft}>
                  {props?.clientlogo?.map((item, index) => (
                    <div key={index} className={styles.teamImg}>
                      <ImageCustom
                        src={
                          item?.Image?.data?.attributes?.url
                            ? `${base_Uri}${item?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={240}
                        height={320}
                        alt="team-member"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
