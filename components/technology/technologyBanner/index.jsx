import React from "react";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const TechnologyBanner = () => {
   return (
      <section className={`${styles.landingBannerStyle}`}>
         <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8">
               <h1 className={styles.title}>
                  Innovating <span className={styles.titleHighlight}>Technology </span> <span className={styles.titleHighlight}> Landscape</span> for
                  the future.
               </h1>
            </div>

            <div className="col-md-4 col-lg-4">
            <p className={styles.leadText}>
            We&apos;re a worldwide presence, serving clients on four continents. Our international expertise ensures innovative solutions tailored to
            diverse global needs.
         </p>
         <Button variant="blueBtn" className={styles.headerBtn} size="sm">
         Let’s Work Together <Icons.ArrowRight size={20} className="ms-2" />
        </Button>
            </div>
         </div>

  
      </section>
   );
};

export default TechnologyBanner;
