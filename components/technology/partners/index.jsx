"use client";
import PartnerCard from "@/components/ui/partnerCard";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const Partners = () => {
  const { theme, setTheme } = useContext(MyContext);
  const partnerCardData = [
    {
      imgSrc: "/images/partners/aws-light.svg",
      darkImgSrc: "/images/partners/aws-dark.svg",
      cardTitle: "AWS",
      cardContent:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      imgSrc: "/images/partners/adobe.svg",
      darkImgSrc: "/images/partners/adobe.svg",
      cardTitle: "Adobe",
      cardContent:
        "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
    },
    {
      imgSrc: "/images/partners/shopify-light.svg",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      cardTitle: "Shopify",
      cardContent:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      imgSrc: "/images/partners/twilio.svg",
      darkImgSrc: "/images/partners/twilio.svg",
      cardTitle: "Twilio",
      cardContent:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
    {
      imgSrc: "/images/partners/shopify-light.svg",
      darkImgSrc: "/images/partners/shopify-dark.svg",
      cardTitle: "Shopify",
      cardContent:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      imgSrc: "/images/partners/aws-light.svg",
      darkImgSrc: "/images/partners/aws-dark.svg",
      cardTitle: "AWS",
      cardContent:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
  ];
  return (
    <section className={`${styles.partner} ${theme ? styles.partnerDark : ""}`}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.headSection}>
          <h6 className={styles.partnerTitle}>Partners</h6>
          <h3 className={styles.partnerHeading}>
            Together in every code. Discover the strength of our partnership.
          </h3>
        </div>

        <div className={styles.partnerCards}>
          {partnerCardData.map((data, index) => (
            <PartnerCard
              key={index}
              imgSrc={data.imgSrc}
              darkImgSrc={data.darkImgSrc}
              cardTitle={data.cardTitle}
              cardContent={data.cardContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
