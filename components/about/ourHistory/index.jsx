import React from "react";

import styles from "./style.module.scss";

const OurHistory = () => {
   return (
      <section className={styles.ourHistory}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-md-5 mb-4">
                  <h6 className={styles.ourHistoryTitle}>Our History</h6>
                  <h3 className={styles.ourHistoryHeading}>Tracing Innovation Through Time: Our IT Journey.</h3>
               </div>
            </div>

            <div className="row">
               <div className="col-md-6 col-lg-5">
                  <h4>Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.</h4>
                  <p>
                     Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and
                     determination, they set on a transformative journey to shape the future.
                  </p>
               </div>
               <div className="col-md-6 col-lg-5"></div>
            </div>
         </div>
      </section>
   );
};

export default OurHistory;
