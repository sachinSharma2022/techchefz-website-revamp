import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

const CaseStudyBanner = () => {
   return (
      <section className={styles.caseStudyBanner}>
         <h1 className={styles.bannerTitle}>
            Introducing the world of <span>Automobiles.</span>
         </h1>
         <div className={styles.bannerImg}>
            <ImageCustom src="/images/project-re.png" width={1360} height={600} alt="banner-img" />
         </div>
      </section>
   );
};

export default CaseStudyBanner;
