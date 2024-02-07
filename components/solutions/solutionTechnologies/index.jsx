"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import MobileSlider from "@/components/common/mobileSlider";
import ServiceInfoCard from "@/components/common/serviceInfoCard";
import styles from "./style.module.scss";

const SolutionTechnologies = () => {
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

  return (
    <section
      className={`${styles.solutionTechnologiesStyle} ${
        theme ? styles.solutionTechnologiesDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div>
            <p className={styles.projectHighlight}>Technologies</p>
            <h2 className={styles.datingText}>
              Driving Technological Advancements for the Future
            </h2>
          </div>
          <div className={`${styles.careerBtn}`}>
            <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
              Explore Technology <Icons.ArrowRight size={18} />
            </Button>
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
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.sbTitle}
                    icon={data.icon}
                    sbText={data.sbText}
                  />
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
        </div>
      </div>

      <div className={cn(styles.ourNumberOption, styles.mobileSlider)}>
        <MobileSlider slidesToShow={1.4}>
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
    </section>
  );
};

export default SolutionTechnologies;
