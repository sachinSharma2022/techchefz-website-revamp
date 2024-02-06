"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "../../ui/button";

// import required modules
import Slider from "react-slick";

// Style
import styles from "./style.module.scss";

const LandingBanner = () => {
  const { theme } = useContext(MyContext);
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <section
      className={cn(
        styles.landingBannerStyle,
        theme ? styles.landingBannerDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.title}>
          Humanizing <br /> Digital Experience <br />
          <div className={styles.contentContainer}>
            Through
            <div className={styles.slider}>
              <Slider {...settings}>
                <div className={styles.text}>Data</div>
                <div className={styles.text}> Creativity</div>
                <div className={styles.text}> Work</div>
              </Slider>
            </div>
          </div>
        </h1>

        <Link href="/contact-us">
          <Button variant={theme ? "blueBtnDark" : "blueBtn"} size="md">
            Let’s Work Together <Icons.ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LandingBanner;
