"use client";

import React from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { MyContext } from "@/context/theme";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";
import TextRevel from "@/components/ui/sectionAnimation";

const DigitalTransformation = ({digital}) => {
  const { theme, setTheme } = useContext(MyContext);
  // const serviceCard = [
  //   {
  //     img: "/images/digital-trans.png",
  //     digitalHeading: "Customer Experience (CX).",
  //     digitalText:
  //       "We help our clients to attract the relevant audience for their business with our advanced technology for a higher conversion rate. We perform advance digital operations like -",
  //   },
  //   {
  //     img: "/images/digital-trans.png",
  //     digitalHeading: "Customer Experience (CX).",
  //     digitalText:
  //       "We help our clients to attract the relevant audience for their business with our advanced technology for a higher conversion rate. We perform advance digital operations like -",
  //   },
  //   {
  //     img: "/images/digital-trans.png",
  //     digitalHeading: "Customer Experience (CX).",
  //     digitalText:
  //       "We help our clients to attract the relevant audience for their business with our advanced technology for a higher conversion rate. We perform advance digital operations like -",
  //   },
  // ];
  const settings = {
    className: "center",
    centerPadding: "0px",
    centerMode: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
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
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <section
      className={`${styles.digitalStyle} ${
        theme ? styles.digitalStyleDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
        <div className={styles.serviceRow}>
          <div className="row">
            <div className="col-md-12 col-12">
              <p className={styles.projectHighlight}>{digital[0]?.Title}</p>
            </div>

            <div className="col-md-8 col-12">
              <h3 className={styles.datingText}>
              {digital[0]?.SubTitle}
                <span className={styles.digitalTechText}>
                {digital[0]?.Description}
                </span>
              </h3>
            </div>
            <div className={`${styles.servicesBtn} col-md-4 col-12`}>
              <Link href="/solutions">
                <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
                {digital[0]?.Btn} <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        </TextRevel>

        <div className={`${styles.digitalMain} digital-transformation`}>
          <Slider {...settings}>
            {digital[0]?.Experience.map((data, index) => (
              <div key={index}>
                <div className={styles.digitalGrid}>
                  <div className={styles.digitalImg}>
                    <ImageCustom
                      src={data?.Image?.data?.attributes?.url?`${base_Uri}${data?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
                      width={421}
                      height={318}
                      alt="bannerImg"
                    />
                  </div>

                  <div className={styles.experienceCardBox}>
                    <h4 className={styles.CustomerHeading} dangerouslySetInnerHTML={{ __html: `${data?.Title}`}}>
                    </h4>
                    <p className={styles.digitalText} dangerouslySetInnerHTML={{ __html: `${data?.Description}`}}> 
                    </p>

                    {/* <ul className={styles.customerList}>
                      <li className={styles.list}>
                        Attract & Engage more users/customers
                      </li>
                      <li className={styles.list}>Increase Conversions</li>
                      <li className={styles.list}>Automate Marketing Tasks</li>
                    </ul> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
