"use client";

import ServiceInfoCard from "@/components/common/serviceInfoCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";
import MobileSlider from "@/components/common/mobileSlider";

const OurNumbers = () => {
  const { theme, setTheme } = useContext(MyContext);

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
      icon: <Icons.Market width={56} height={56} />,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <section
      className={`${styles.numberStyle} ${theme ? styles.numberStyleDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <div>
              <p className={styles.projectHighlight}>our numbers</p>
              <h2 className={styles.datingText}>
                Let the Numbers Tell the Success Story.
              </h2>
            </div>

            <div>
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                Career Opportunities <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </TextRevel>
        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
            <div>
              <p className={styles.ourNumbersText}>
                Empowering over 100 startups in the last four years, our
                results-driven approach has fueled their growth journeys. Our
                commitment to success extends beyond services; it&apos;s a
                partnership driving innovation and prosperity.
              </p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {serviceCard.map((data, index) => (
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.sbTitle}
                    icon={data.icon}
                    sbText={data.sbText}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={cn(styles.mobileCards, styles.ourNumberOption)}>
            <MobileSlider slidesToShow={1.3}>
              {serviceCard.map((data, index) => (
                <ServiceInfoCard
                  key={index}
                  sbTitle={data.sbTitle}
                  icon={data.icon}
                  sbText={data.sbText}
                />
              ))}
            </MobileSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
