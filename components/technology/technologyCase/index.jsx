"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CaptionCard from "@/components/ui/captionCard";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";

import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.scss";
import MobileSlider from "@/components/common/mobileSlider";

const TechnologyCase = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1199px)" });

  return (
    <section
      className={`${styles.technologyCase} ${
        theme ? styles.technologyCaseDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.headSection}>
          <div className={styles.caseTop}>
            <h4
              className={cn(styles.caseTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h4>
            <h3
              className={cn(styles.caseHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></h3>
          </div>
          <div className={styles.btnSection}>
            <Link href={props?.BtnLink}>
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                {props?.Button} <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

        {isBigScreen ? (
          <div className={styles.technologyCaseCards}>
            {props?.CaseStudyCard?.map((data, index) => (
              <CaptionCard
                key={index}
                imgSrc={
                  data?.Image?.data?.attributes?.url
                    ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                title={data.Title}
              />
            ))}
          </div>
        ) : (
          <div className={styles.mobileSlider}>
            <MobileSlider slidesToShow={1.2}>
              {props?.CaseStudyCard?.map((data, index) => (
                <CaptionCard
                  key={index}
                  imgSrc={
                    data?.Image?.data?.attributes?.url
                      ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  title={data.Title}
                />
              ))}
            </MobileSlider>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologyCase;
