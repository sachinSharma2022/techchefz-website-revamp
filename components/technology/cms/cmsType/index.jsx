import PartnerCard from "@/components/ui/partnerCard";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const CmsType = () => {
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
          <div className="row">
            <div className="col-md-12 col-12">
              <p className={styles.ProjectHighlight}>Types of CMS</p>
            </div>
            <div className="col-md-8 col-12">
              <h2 className={styles.datingText}>
                Together in every code. Discover the strength of our
                partnership.
              </h2>
            </div>
          </div>
        </div>

        <div className={`${styles.cmsGridCards} `}>
          {typeCard.map((data, index) => (
            <PartnerCard
              key={index}
              imgSrc={data.imgUrl}
              cardTitle={data.sbTitle}
              cardContent={data.sbText}
              arrowUp
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CmsType;
