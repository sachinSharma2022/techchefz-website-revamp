import PartnerCard from "@/components/ui/partnerCard";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const Partners = () => {
  const partnerCardData = [
    {
      imgSrc: "/images/partners/partner1.png",
      cardTitle: "AWS",
      cardContent:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      imgSrc: "/images/partners/partner2.png",
      cardTitle: "Adobe",
      cardContent:
        "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
    },
    {
      imgSrc: "/images/Shopify.svg",
      cardTitle: "Shopify",
      cardContent:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      imgSrc: "/images/partners/partner3.png",
      cardTitle: "Twilio",
      cardContent:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
    {
      imgSrc: "/images/Shopify.svg",
      cardTitle: "Shopify",
      cardContent:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      imgSrc: "/images/partners/partner1.png",
      cardTitle: "AWS",
      cardContent:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
  ];
  return (
    <section className={styles.partner}>
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
