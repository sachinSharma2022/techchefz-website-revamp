"use client";

import LeftDrawer from "@/components/common/leftDrawer";
import { Icons } from "@/components/icons";
import PartnerCard from "@/components/ui/partnerCard";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { ImageCustom } from "@/components/ui/imageCustom";

const CmsType = () => {
  const { theme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);

  const typeCard = [
    {
      imgUrl: "/images/drupal.png",
      sbTitle: "Drupal",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      imgUrl: "/images/wordpress.png",
      sbTitle: "WordPress",
      sbText:
        "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
    },
    {
      imgUrl: "/images/Shopify.svg",
      sbTitle: "Shopify",
      sbText:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      imgUrl: "/images/strapi.png",
      sbTitle: "Strapi",
      sbText:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
    {
      imgUrl: "/images/aem.svg",
      sbTitle: "AEM",
      sbText:
        "We Have Expertise In Development Of Mobile Applications Using Native And Hybrid Technologies.",
    },
    {
      imgUrl: "/images/Shopify.svg",
      sbTitle: "Shopify",
      sbText:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
  ];

  return (
    <section className={`${styles.cmsTypeStyle}`}>
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <p className={styles.projectHighlight}>Types of CMS</p>
          <h2 className={styles.datingText}>
            Together in every code. Discover the strength of our partnership.
          </h2>
        </div>

        <div className={`${styles.cmsGridCards} `}>
          {typeCard.map((data, index) => (
            <PartnerCard
              key={index}
              imgSrc={data.imgUrl}
              cardTitle={data.sbTitle}
              cardContent={data.sbText}
              arrowUp
              onClick={() => setIsOpen(true)}
            />
          ))}
        </div>
      </div>

      <LeftDrawer
        title="wordpress"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          className={cn(styles.modalBody, theme ? styles.darkThemeStyle : "")}
        >
          <div className={styles.cardImg}>
            <ImageCustom
              src="/images/wordpress.png"
              width={110}
              height={40}
              alt="partner-logo"
              className={styles.imgStyle}
            />
          </div>
          <p className={styles.modalContent}>
            Shopify is a leading e-commerce platform that enables businesses of
            all sizes to set up, operate, and scale their online stores.
            It&lsquo;s known for its user-friendly interface, making it
            accessible even to those without technical expertise. Shopify offers
            a variety of customizable templates, allowing businesses to design
            their stores to match their brand&lsquo;s aesthetics and
            requirements.
          </p>
          <Link href="https://www.shopify.com/" target="_blank">
            https://www.shopify.com/
          </Link>
        </div>
      </LeftDrawer>
    </section>
  );
};

export default CmsType;
