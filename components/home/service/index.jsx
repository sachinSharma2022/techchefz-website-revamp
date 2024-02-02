"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";

const Service = () => {
  const { theme, setTheme } = useContext(MyContext);

  const serviceCard = [
    {
      icon: <Icons.Transform width={64} height={64} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.CustomDevelopment width={64} height={64} />,
      sbTitle: "Product Engineering & Custom Development",
      sbText:
        "We Believe In Quality Backend Development For Faster Backend Processing. ",
    },
    {
      icon: <Icons.MarTech width={64} height={64} />,
      sbTitle: "Customer Experience & MarTech",
      sbText:
        "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
    },
    {
      icon: <Icons.Intelligence width={64} height={64} />,
      sbTitle: "Data Analytics & Intelligence",
      sbText:
        "We Have Expertise In Development Of Mobile Applications Using Native And Hybrid Technologies.",
    },
    {
      icon: <Icons.Platforms width={64} height={64} />,
      sbTitle: "Enterprise Technology Platforms",
      sbText:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      icon: <Icons.Cloud width={64} height={64} />,
      sbTitle: "Cloud & Dev-Sec-Ops",
      sbText:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
    {
      icon: <Icons.DataIntelligence width={64} height={64} />,
      sbTitle: "Data Analytics & Intelligence",
      sbText:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "15px"
        },
      },
    ],
  };

  return (
    <section
      className={cn(
        styles.serviceDetailsMain,
        theme ? styles.serviceDetailsMainDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceHeading}>
            <p className={styles.serviceText}>Service</p>
            <h3 className={styles.serviceTitle}>
              Exclusive development leveraging top notch technologies
            </h3>
            <Link href="/solutions">
              <Button variant="outline" size="md">
                Our Solutions <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className={cn(styles.desktopCards, styles.serviceOption)}>
            {serviceCard.map((data, index) => (
              <div key={index} className={styles.serviceBox}>
                <div className={styles.bgIcon}>{data.icon}</div>
                <h4 className={styles.sbTitle}>{data.sbTitle}</h4>
                <p className={styles.sbText}>{data.sbText}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={cn(styles.serviceOption, "service-mobile-slider")}>
          <Slider {...settings}>
            {serviceCard.map((data, index) => (
              <div key={index}>
                <div key={index} className={styles.serviceBox}>
                  <div className={styles.bgIcon}>{data.icon}</div>
                  <h4 className={styles.sbTitle}>{data.sbTitle}</h4>
                  <p className={styles.sbText}>{data.sbText}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Service;
