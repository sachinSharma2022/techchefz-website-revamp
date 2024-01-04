import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const Consistent = () => {
   return (
      <section className={styles.consistent}>
         <div className="row">
            <div className="col-md-12 col-lg-12">
               <div className={styles.consistentImg}>
                  <ImageCustom src={"/images/consistent-img.png"} width={1000} height={600} alt="img" />
               </div>
            </div>
         </div>
         <div className="row justify-content-between">
            <div className="col-md-5 col-lg-5">
               <h3 className={styles.consistentTitle}><span>7+ years</span>  of consistent excellence, meeting deadlines and budgets with precision.</h3>
            </div>
            <div className="col-md-5 col-lg-5">
               <p className={styles.consistentText}>
                  For over seven years, Techchefz has been at the forefront of technological innovation. But what truly sets us apart is our
                  unwavering commitment to excellence consistently, year after year.
               </p>
               <Button variant="outline" size="sm">
                  Learn More <Icons.ArrowRight size={18} />
               </Button>
            </div>
         </div>
      </section>
   );
};

export default Consistent;
