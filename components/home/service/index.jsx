"use client";

import MobileSlider from "@/components/common/mobileSlider";
import ServiceCard from "@/components/common/serviceCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./style.module.scss";

const Service = () => {
  const { theme, setTheme } = useContext(MyContext);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const serviceCard = [
    {
      icon: <Icons.Transform width={64} height={64} />,
      subTitle: "Strategy & Digital Transformation",
      subText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      icon: <Icons.CustomDevelopment width={64} height={64} />,
      subTitle: "Product Engineering & Custom Development",
      subText:
        "We Believe In Quality Backend Development For Faster Backend Processing. ",
    },
    {
      icon: <Icons.MarTech width={64} height={64} />,
      subTitle: "Customer Experience & MarTech",
      subText:
        "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
    },
    {
      icon: <Icons.Intelligence width={64} height={64} />,
      subTitle: "Data Analytics & Intelligence",
      subText:
        "We Have Expertise In Development Of Mobile Applications Using Native And Hybrid Technologies.",
    },
    {
      icon: <Icons.Platforms width={64} height={64} />,
      subTitle: "Enterprise Technology Platforms",
      subText:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      icon: <Icons.Cloud width={64} height={64} />,
      subTitle: "Cloud & Dev-Sec-Ops",
      subText:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
    {
      icon: <Icons.DataIntelligence width={64} height={64} />,
      subTitle: "Data Analytics & Intelligence",
      subText:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
  ];

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
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                Our Solutions <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {isBigScreen && (
            <div className={cn(styles.desktopCards)}>
              {serviceCard.map((data, index) => (
                <ServiceCard
                  key={index}
                  icon={data.icon}
                  subTitle={data.subTitle}
                  subText={data.subText}
                />
              ))}
            </div>
          )}
        </div>

        {!isBigScreen && (
          <div className={cn(styles.mobileCards)}>
            <MobileSlider slidesToShow={1.3}>
              {serviceCard.map((data, index) => (
                <ServiceCard
                  key={index}
                  icon={data.icon}
                  subTitle={data.subTitle}
                  subText={data.subText}
                />
              ))}
            </MobileSlider>
          </div>
        )}
      </div>
    </section>
  );
};
export default Service;
