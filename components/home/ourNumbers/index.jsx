"use client";

import MobileSlider from "@/components/common/mobileSlider";
import ServiceInfoCard from "@/components/common/serviceInfoCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";

import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const OurNumbers = ({ carrer, experience }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isTabletScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section
      className={`${styles.numberStyle} ${theme ? styles.numberStyleDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <div>
              <h6
                className={cn(styles.projectHighlight, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${carrer?.title}` }}
              ></h6>
              <h2
                className={cn(styles.datingText, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${carrer?.description}` }}
              ></h2>
            </div>

            <div>
              <Link href={carrer.BtnLink}>
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  size="md"
                >
                  {carrer.button}
                  <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </TextRevel>
        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src={
                  experience?.Image?.data?.attributes?.url
                    ? `${base_Uri}${experience?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
            <div>
              <p className={styles.ourNumbersText}>{experience?.Description}</p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {experience?.Vews.map((data, index) => (
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.Title}
                    icon={
                      data?.Image?.data.attributes.url
                        ? `${base_Uri}${data?.Image?.data.attributes.url}`
                        : `${base_Uri}/`
                    }
                    sbText={data.Description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={cn(styles.mobileCards, styles.ourNumberOption)}>
            <MobileSlider slidesToShow={isTabletScreen ? 2.1 : 1.3}>
              {experience.Vews.map((data, index) => (
                <ServiceInfoCard
                  key={index}
                  sbTitle={data.Title}
                  icon={
                    data?.Image?.data.attributes.url
                      ? `${base_Uri}${data?.Image?.data.attributes.url}`
                      : `${base_Uri}/`
                  }
                  sbText={data.Description}
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
