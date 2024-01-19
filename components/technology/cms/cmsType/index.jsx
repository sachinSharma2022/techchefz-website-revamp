"use client";

import LeftDrawer from "@/components/common/leftDrawer";
import { Icons } from "@/components/icons";
import PartnerCard from "@/components/ui/partnerCard";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import styles from "./style.module.scss";

const CmsType = () => {
  const { theme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(true);

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
        title="Shopify"
        imgUrl="/images/Shopify.svg"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          className={cn(styles.modalBody, theme ? styles.darkThemeStyle : "")}
        >
          <p className={styles.modalContent}>
            Our visionary CEO, brings dynamic leadership to Techchefz. With a
            profound understanding of industry trends and unwavering commitment,
            he spearheads our strategic direction, driving innovation and
            growth. As our dedicated CTO, Mayank Maggon shapes our technological
            landscape. With a rich background in tech, he leads our teams in
            creating cutting-edge solutions, ensuring we stay at the forefront
            of industry advancements.
          </p>
          <p className={styles.teamMail}>
            <Icons.MailIcon width={24} height={24} className="me-2" />
            mayankmaggon@techchefz.com
          </p>

          <div className={styles.socialSection}>
            <h6>Let’s Get Connect</h6>
            <div className={styles.modalIcons}>
              <Icons.Linkedin
                className={styles.linkdinIcon}
                width={34}
                height={34}
              />
              <Icons.twitter
                className={styles.twitter}
                width={34}
                height={34}
              />
            </div>
          </div>
        </div>
      </LeftDrawer>
    </section>
  );
};

export default CmsType;
