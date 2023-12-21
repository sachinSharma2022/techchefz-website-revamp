import React from "react";

import styles from "./style.module.scss";

const WhatWeDo = () => {
   return (
      <section className={styles.whatWeDo}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-md-5 mb-4">
                  <h6 className={styles.weDoTitle}>What we do</h6>
                  <h2 className={styles.weDoHead} >Empowering Innovation: Our Role in the Tech Industry.</h2>
               </div>
            </div>

            <div className={styles.workCardWrapper}>
               <div className={styles.workCard}>
                  <h6>Digital Strategy</h6>
                  <p>TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology. </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhatWeDo;
