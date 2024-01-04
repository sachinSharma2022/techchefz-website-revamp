import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const Discover = () => {
   return (
      <section className={styles.discover}>
         <div className="row justify-content-between align-items-end">
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
      </section>
   );
};

export default Discover;
