import React from "react";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";

const Industry = () => {
   return (
      <section className={styles.industry}>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-md-4 col-lg-4">
                  <div className={styles.industryLeft}>
                     <div className="mb-4">
                        <h6> Industry</h6>
                        <h5>Automobile</h5>
                     </div>

                     <div className="mb-4">
                        <h6> Platform</h6>
                        <h5>Web, Responsive</h5>
                     </div>

                     <h6> Services</h6>
                     <div className={styles.serviceBtn}>
                        <Button variant="outline" size="xs">
                           Web Design
                        </Button>
                        <Button variant="outline" size="xs">
                           CMS
                        </Button>
                        <Button variant="outline" size="xs">
                           React
                        </Button>
                        <Button variant="outline" size="xs">
                           AEM
                        </Button>
                        <Button variant="outline" size="xs">
                           Retail
                        </Button>
                     </div>
                  </div>
               </div>
               <div className="col-md-7 col-lg-7">
                  <div className={styles.industryRight}>
                     <h3 className={styles.industryHeading}>CMS Implementation for the largest car manufacturer and exporter</h3>
                     <p className={styles.industryText}>
                        Manufacturing quality cars for everyone. Manufacturing quality cars for everyone. One of the largest car manufacturers and car
                        exporters from India since its inception. Exporting to more than 80 countries, 400+ dealers and 1000+ service points in India.
                        The brand is known for its advanced production, quality and testing capabilities with fully integrated state-of-the-art
                        manufacturing plants. TechChefz implemented a CMS platform with seamless integration of much-needed modules.
                     </p>
                  </div>
               </div>
            </div>

            <div className={styles.industryImg}>
               <ImageCustom src="/images/industry-img.png" width={1300} height={500} alt="website-img" />
            </div>
         </div>
      </section>
   );
};

export default Industry;