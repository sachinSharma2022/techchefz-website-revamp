import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

const CmsType = () => {
  const typeCmsCard = [
    {
      brandImg: (
        <ImageCustom
          src="/images/drupal.png"
          width={70}
          height={53}
          alt="drupal"
        />
      ),
      sbTitle: "Drupal",
      sbText:
        "We Provide A Humanized And Contextual Experience To Build An Exclusive Digital Experience.",
    },
    {
      brandImg: (
        <ImageCustom
          src="/images/wordpress.png"
          width={40}
          height={40}
          alt="wordpress"
        />
      ),
      sbTitle: "WordPress",
      sbText:
        "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS.",
    },
    {
      brandImg: (
        <ImageCustom
          src="/images/Shopify.svg"
          width={140}
          height={40}
          alt="shopify"
        />
      ),
      sbTitle: "Shopify",
      sbText:
        "At TechChefz We Provide First-Class Artificial Intelligence And Machine Learning with Expertise.",
    },
    {
      brandImg: (
        <ImageCustom
          src="/images/strapi.png"
          width={150}
          height={40}
          alt="strapi"
        />
      ),
      sbTitle: "Strapi",
      sbText:
        "We Facilitate Easy Cloud Migration And Deliver DevOps Automation And 24*7 Incident Management Services.",
    },
    {
      brandImg: (
        <ImageCustom src="/images/aem.svg" width={70} height={40} alt="aem" />
      ),
      sbTitle: "AEM",
      sbText:
        "We Have Expertise In Development Of Mobile Applications Using Native And Hybrid Technologies.",
    },
    {
      brandImg: (
        <ImageCustom
          src="/images/Shopify.svg"
          width={140}
          height={40}
          alt="shopify"
        />
      ),
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

      <div className={styles.ourNumberMain}>
        <div className={`${styles.cmsGridCards} `}>
          {typeCmsCard.map((data, index) => (
            <div key={index} className={styles.serviceCmsBox}>
              <div className={styles.numberCardFlex}>
                {<span>{data.brandImg}</span>}
                <Icons.ArrowUpLeft width={23} height={23} />
              </div>
              <h2 className={styles.sbTitle}>{data.sbTitle}</h2>
              <p className={styles.sbText}>{data.sbText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CmsType;
