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

const OurClients = () => {
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

  const logoSec = [
    "/images/clients/logo1.png",
    "/images/clients/logo2.png",
    "/images/clients/logo3.png",
    "/images/clients/logo4.png",
    "/images/clients/logo5.png",
    "/images/clients/logo6.png",
    "/images/clients/logo1.png",
    "/images/clients/logo1.png",
    "/images/clients/logo2.png",
    "/images/clients/logo3.png",
    "/images/clients/logo4.png",
    "/images/clients/logo5.png",
    "/images/clients/logo6.png",
    "/images/clients/logo1.png",
  ];
  return (
    <section
      className={cn(styles.ourClients, theme ? styles.ourClientsDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <div className={styles.contentSec}>
            <h6 className={styles.subHeading}>Our Clients</h6>
            <h3 className={styles.heading}>
              From <span>Clients to Friends.</span>
            </h3>
            <p className={styles.description}>
              We’ve designed, developed, and optimized 100’s of Webflow projects
              and met some incredible people along the way.
            </p>
            <Link href="/contact-us">
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="lg"
              >
                Go to Portfolio <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className={styles.clientSection}>
            <p className={styles.description}>
              Over the next 3 years, we developed into a full-service digital
              agency. We support our clients with web development, mobile app
              development, web design, branding UI/UX design and now getting
              into AR/VR.
            </p>

            <div className={cn(styles.logoAnimation, "logo-animation")}>
              <div className={styles.logoSection}>
                <Slider {...sliderLeft}>
                  {logoSec.map((item, index) => (
                    <div key={index} className={styles.teamImg}>
                      <ImageCustom
                        src={item}
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
                  {logoSec.map((item, index) => (
                    <div key={index} className={styles.teamImg}>
                      <ImageCustom
                        src={item}
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
                  {logoSec.map((item, index) => (
                    <div key={index} className={styles.teamImg}>
                      <ImageCustom
                        src={item}
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
