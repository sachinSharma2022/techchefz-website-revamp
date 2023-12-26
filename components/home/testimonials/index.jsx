"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";
const Testimonials = () => {
  const serviceCard = [
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
  ];
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
    <section className={`${styles.digitalStyle}`}>
      <div className={`${styles.digitalMain} digital-transformation`}>
        <div className={styles.testimonialsLeft}>
          <p className={styles.ProjectHighlight}>Testimonials</p>
          <div className={styles.testimonialsHeading}>
            <h3>Voices of Delightful Experiences.</h3>
          </div>
          <p className={styles.testimonialsText}>
            Delve into our case studies to witness firsthand how we've tackled
            challenges, delivered solutions, and achieved measurable success.
            Each story is a testament to our commitment, expertise, and the
            transformative impact.
          </p>
        </div>
        <Slider {...settings}>
          {serviceCard.map((data, index) => (
            <div key={index} className={styles.testimonialCardBox}>
              <div className={styles.commaImg}>
                <Icons.Comma width={29} height={24} />
              </div>
              <p className={styles.customerText}>{data.CustomerText}</p>
              <div className={styles.customerProfile}>
                <div className={styles.customerImg}>
                  <ImageCustom
                    src={data.img}
                    width={100}
                    height={100}
                    alt="profileImg"
                  />
                </div>
                <p className={styles.customerName}>{data.CustomerName}</p>
                <p className={styles.customerRole}>{data.CustomerRole}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
