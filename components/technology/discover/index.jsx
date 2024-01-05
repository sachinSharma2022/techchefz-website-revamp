import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const Discover = () => {
   return (
      <section className={styles.discover}>
         <div className="row justify-content-between ">
            <div className="col-md-4 col-lg-4">
               <h6 className={styles.discoverTitle}>Dicover</h6>
               <h3 className={styles.discoverHeading}>Technology Stack</h3>
            </div>
            <div className="col-md-2 col-lg-2">
               <Button variant="outline" size="sm">
                  Explore Now <Icons.ArrowRight size={18} />
               </Button>
            </div>
         </div>
         <div className="row">
           <div className="col-md-3 col-lg-3">
            <h5>Web Platforms</h5>
            <p>We specialize in comprehensive website audits that provide valuable insights</p>
            <h5>Commerce</h5>
            <h5>Analytics & Marketing</h5>
            <h5>DevSecOps</h5>
           </div>
           <div className="col-md-7 col-lg-7">
            <h6>Frontend</h6>
            <div className={styles.platformsBtn}>
              
            </div>
           </div>
         </div>
      </section>
   );
};

export default Discover;
