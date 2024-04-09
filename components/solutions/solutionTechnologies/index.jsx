"use client";
import ServiceInfoCard from "@/components/common/serviceInfoCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import styles from "./style.module.scss";
import MobileSlider from "@/components/common/mobileSlider";
import TextRevel from "@/components/ui/sectionAnimation";
import { useMediaQuery } from "react-responsive";

const SolutionTechnologies = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isSmallMobile = useMediaQuery({ query: "(max-width: 690px)" });

  return (
    <section
      className={`${styles.solutionTechnologiesStyle} ${
        theme ? styles.solutionTechnologiesDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <div>
              <h6
                className={cn(styles.projectHighlight, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
              ></h6>

              <h2
                className={cn(styles.datingText, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
              ></h2>
            </div>

            <div className={`${styles.careerBtn}`}>
              <Link href={props.ButtonLink}>
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  size="md"
                >
                  {props?.Button} <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </TextRevel>

        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div className={styles.cards}>
              <p className={styles.ourNumbersText}>{props?.Description}</p>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                {props?.TechnologyInner?.map((data, index) => (
                  <ServiceInfoCard
                    key={index}
                    sbTitle={data.Title}
                    icon={
                      data?.Image?.data?.attributes?.url
                        ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                        : `${base_Uri}/`
                    }
                    sbText={data.Description}
                  />
                ))}
              </div>
            </div>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src={
                  props?.image?.data?.attributes?.url
                    ? `${base_Uri}${props?.image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.mobileSlider} ${styles.ourNumberOption} `}>
        <MobileSlider slidesToShow={isSmallMobile ? 1.4 : 2.2}>
          {props?.TechnologyInner?.map((data, index) => (
            <ServiceInfoCard
              key={index}
              sbTitle={data.Title}
              icon={
                data?.Image?.data?.attributes?.url
                  ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              sbText={data.Description}
            />
          ))}
        </MobileSlider>
      </div>
    </section>
  );
};

export default SolutionTechnologies;
