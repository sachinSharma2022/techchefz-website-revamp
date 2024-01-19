import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";

const CmsOurValue = () => {
  const serviceCard = [
    {
      icon: <Icons.Market width={56} height={56} />,
      sbTitle: "Customer Experience & MarTech",
      sbText:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  ",
    },
    {
      icon: <Icons.Rates width={56} height={56} />,
      sbTitle: "Strategy & Digital Transformation",
      sbText:
        "We believe in a customer-centric ethic without and people-centric paradigm within.   ",
    },
    {
      icon: <Icons.PerformanceIcon width={56} height={56} />,
      sbTitle: "Data Analytics & Intelligence",
      sbText:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  ",
    },
  ];
  return (
    <section className={styles.cmsValueSection}>
      <div className="row">
        <div className="col-md-7 col-lg-8 col-12">
          <div className={styles.ourValueHead}>
            <p className={styles.projectHighlight}>Our Values</p>
            <h4 className={styles.title}>
              Our Capability for CMS Implementation.
            </h4>
            <p className={styles.leadText}>
              We believe in a customer-centric ethic without and people-centric
              paradigm within. With a strong sense of community, ownership, and
              collaboration our people work in a spirit of co-creation,
              co-innovation, and co-development to engineer next-generation
              software products.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.valueBannerImg}>
        <ImageCustom
          src="/images/value.png"
          width={1240}
          height={487}
          alt="bannerImg"
        />
      </div>
      <div className={styles.valueCards}>
        <div className={`${styles.desktopCards} ${styles.valueOption} `}>
          {serviceCard.map((data, index) => (
            <div key={index} className={styles.valueBox}>
              <div className={styles.bgIcon}>{data.icon}</div>
              <h4 className={styles.sbTitle}>{data.sbTitle}</h4>
              <p className={styles.sbText}>{data.sbText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CmsOurValue;
