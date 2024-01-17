import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const CaseStudyBanner = () => {
  return (
    <section className={styles.caseStudyBanner}>
      <div className={cn("primary-container")}>
        <h1 className={styles.bannerTitle}>
          Introducing the world of <br /> <span>Automobiles.</span>
        </h1>
      </div>
      <div className={styles.bannerImg}>
        <ImageCustom
          src="https://images.unsplash.com/photo-1646729213778-63f0540a6d7a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1360}
          height={500}
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default CaseStudyBanner;
