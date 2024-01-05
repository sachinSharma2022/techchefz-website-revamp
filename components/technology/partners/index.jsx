import PartnerCard from "@/components/ui/partnerCard";
import React from "react";

import styles from "./style.module.scss";

const Partners = () => {
   const partnerCardData = [
      {
         imgSrc: "/images/partners/partner1.png",
         imgWidth: 80,
         imgHeight: 45,
         cardTitle: "AWS",
         cardContent: "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
      },
      {
         imgSrc: "/images/partners/partner2.png",
         imgWidth: 140,
         imgHeight: 45,
         cardTitle: "Adobe",
         cardContent: "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
      },
      {
         imgSrc: "/images/Shopify.svg",
         imgWidth: 100,
         imgHeight: 45,
         cardTitle: "Shopify",
         cardContent: "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
      },
      {
         imgSrc: "/images/partners/partner3.png",
         imgWidth: 130,
         imgHeight: 45,
         cardTitle: "Twilio",
         cardContent: "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
      },
      {
        imgSrc: "/images/Shopify.svg",
        imgWidth: 100,
        imgHeight: 45,
        cardTitle: "Shopify",
        cardContent: "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
     },
      {
        imgSrc: "/images/partners/partner1.png",
        imgWidth: 80,
        imgHeight: 45,
        cardTitle: "AWS",
        cardContent: "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
     },
    
   ];
   return (
      <section className={styles.partner}>
         <div className="row">
            <div className="col-md-7 col-lg-7">
               <h6 className={styles.partnerTitle}>Partners</h6>
               <h3 className={styles.partnerHeading}>Together in every code. Discover the strength of our partnership.</h3>
            </div>
         </div>

         <div className={styles.partnerCards}>
            {partnerCardData.map((data, index) => (
               <PartnerCard
                  key={index}
                  imgSrc={data.imgSrc}
                  imgWidth={data.imgWidth}
                  imgHeight={data.imgHeight}
                  cardTitle={data.cardTitle}
                  cardContent={data.cardContent}
               />
            ))}
         </div>
      </section>
   );
};

export default Partners;
