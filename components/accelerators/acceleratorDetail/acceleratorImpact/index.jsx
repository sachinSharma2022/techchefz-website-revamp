"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss";

const AcceleratorImpact = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.impact} ${theme ? styles.impactDark : ""}`}>
      <div className="text-center">
        <h6 className={styles.subHeading}>Impact</h6>
        <h3 className={styles.impactHeading}>
          {props.heading || "Confronting Out of Stock (OOS) Challenges"}
        </h3>
      </div>

      <div className={styles.impactTopSection}>
        <div className={styles.impactImage}>
          <ImageCustom
            src={"/images/impact1.png"}
            width={700}
            height={600}
            alt="impact-img"
          />
        </div>
        <div className={styles.topSectionRight}>
          <h4>Unleashing Language Precision and Data Excellence</h4>
          <ul>
            <li>
              Improved User Experience: Increases customer satisfaction and
              engagement.
            </li>
            <li>
              Enhanced Customer Support: Improves customer service and also
              reduces the workload on human support staff.
            </li>
            <li>
              Better Understanding of Customer Needs: Data gathered can be
              retrieved for multiple purposes
            </li>
            <li>
              Increased Sales and Conversion Rates: Buying process becomes more
              effective. This can lead to increased sales and higher conversion
              rates.
            </li>
            <li>
              SEO and Visibility Advantages: optimizing for conversational
              search can improve a business&apos;s online visibility.
            </li>
          </ul>
          <Button variant="lightBlueOutline" size="lg">
            Download Notebook <Icons.ArrowRight size={18} />
          </Button>
        </div>
      </div>
      <div className={styles.impactTopSection}>
        <div className={styles.topSectionRight}>
          <h4>Unleashing Language Precision and Data Excellence</h4>
          <p>
            Out of Stock (OOS) situations present a significant challenge in the
            retail industry, directly impacting sales and customer satisfaction.
            The Solution Accelerator tackles this pervasive issue head-on by
            leveraging the power of real-time data and advanced analytics.{" "}
          </p>
          <Button variant="lightBlueOutline" size="lg">
            Download Notebook <Icons.ArrowRight size={18} />
          </Button>
        </div>
        <div className={styles.impactImage}>
          <ImageCustom
            src={"/images/impact2.png"}
            width={700}
            height={600}
            alt="impact-img"
          />
        </div>
      </div>
      <div className={styles.impactTopSection}>
        <div className={styles.impactImage}>
          <ImageCustom
            src={"/images/impact3.png"}
            width={700}
            height={600}
            alt="impact-img"
          />
        </div>
        <div className={styles.topSectionRight}>
          <h4>Unleashing Language Precision and Data Excellence</h4>
          <p>
            Out of Stock (OOS) situations present a significant challenge in the
            retail industry, directly impacting sales and customer satisfaction.
            The Solution Accelerator tackles this pervasive issue head-on by
            leveraging the power of real-time data and advanced analytics.{" "}
          </p>
          <Button variant="lightBlueOutline" size="lg">
            Download Notebook <Icons.ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorImpact;
