"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CaptionCard from "@/components/ui/captionCard";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import MobileSlider from "@/components/common/mobileSlider";

import styles from "./style.module.scss";

const CaseStudy = ({ className }) => {
  const { theme, setTheme } = useContext(MyContext);

  const sliderData = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "AI-Powered Customer Journeys: How TechChefz Delivers Personalized Experiences",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Future of Digital Transformation in 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "5 Digital Transformation Challenges Businesses Face and How to Overcome Them",
    },
  ];

  return (
    <section
      className={cn(
        styles.caseStudy,
        theme ? styles.caseStudyDark : "",
        className
      )}
    >
      <div className={cn("primary-container relative")}>
        <TextRevel>
          <div className={styles.headSection}>
            <div className={styles.contentSection}>
              <h6 className={cn(styles.relatedCaseTitle, "gradient-text")}>
                Case Study
              </h6>
              <h3 className={cn(styles.relatedCaseHeading, "gradient-text")}>
                Together in every code. Discover the strength of our
                partnership.
              </h3>
            </div>
            <div>
              <Link href="/">
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  size="md"
                >
                  Explore Now
                  <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </TextRevel>

        <div className={cn(styles.caseStudyCard, styles.desktopView)}>
          {sliderData.map((item) => (
            <CaptionCard
              key={item}
              className={styles.cardStyle}
              alt="image"
              textStyle={styles.textStyle}
              imgSrc={item.image}
              title={item.title}
              // imgSrc={
              //   data?.attributes?.Banner?.PortfolioImage?.data?.attributes
              //     ?.url
              //     ? base_Uri +
              //       data?.attributes?.Banner?.PortfolioImage?.data
              //         ?.attributes?.url
              //     : `${base_Uri}/`
              // }
              // redirect={generateSlug(
              //   data?.attributes?.Banner?.PortfolioTitle
              // )}
              // params={params}
            />
          ))}
        </div>

        <div className={cn(styles.caseStudyCard, styles.mobileView)}>
          <MobileSlider slidesToShow={1}>
            {sliderData.map((item) => (
              <CaptionCard
                key={item}
                className={styles.cardStyle}
                alt="image"
                textStyle={styles.textStyle}
                imgSrc={item.image}
                title={item.title}
              />
            ))}
          </MobileSlider>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
