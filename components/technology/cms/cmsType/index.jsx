import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
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
      <div className={styles.careerRow}>
        <div className="row">
          <div className="col-md-12 col-12">
            <p className={styles.ProjectHighlight}>Types of CMS</p>
          </div>
          <div className="col-md-8 col-12">
            <h2 className={styles.datingText}>
              Together in every code. Discover the strength of our partnership.
            </h2>
          </div>
        </div>
      </div>

      <div className={`${styles.cmsGridCards} `}>
        {typeCard.map((data, index) => (
          <div key={index} className={styles.serviceCmsBox}>
            <div className={styles.numberCardFlex}>
              <ImageCustom
                src={data.imgUrl}
                width={140}
                height={40}
                alt="shopify"
              />
              <Icons.ArrowUpRight width={22} height={22} />
            </div>
            <h2 className={styles.sbTitle}>{data.sbTitle}</h2>
            <p className={styles.sbText}>{data.sbText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CmsType;
