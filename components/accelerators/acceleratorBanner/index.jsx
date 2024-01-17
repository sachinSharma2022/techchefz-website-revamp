import React from "react";

import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const AcceleratorBanner = () => {
   return (
      <section className={styles.banner}>
         <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>
               Speed Your Journey from Idea to Impact with our <span>Accelerators.</span>
            </h1>
            <div className={styles.bannerRight}>
               <p>
                  Streamline Your Tech Projects with Techchefz Solution Accelerators. Our tailor-made toolkits designed to fast-track your most
                  critical and impactful projects.
               </p>
               <Button variant="blueBtn" className={styles.headerBtn} size="md">
                  Request a Demo <Icons.ArrowRight size={20} className="ms-2" />
               </Button>
            </div>
         </div>
      </section>
   );
};

export default AcceleratorBanner;
