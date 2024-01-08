import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const Discover = () => {
   const frontendBtn = [
      {
         platformsIcon: <Icons.ReactBule className={styles.reactPlatform} width={30} height={30} />,
         title: "React.JS",
      },
      {
         platformsIcon: <Icons.ReactBule className={styles.reactPlatform} width={30} height={30} />,
         title: "React.JS",
      },
      {
         platformsIcon: <Icons.ReactBule className={styles.reactPlatform} width={30} height={30} />,
         title: "React.JS",
      },
      {
         platformsIcon: <Icons.ReactBule className={styles.reactPlatform} width={30} height={30} />,
         title: "React.JS",
      },
      {
         platformsIcon: <Icons.ReactBule className={styles.reactPlatform} width={30} height={30} />,
         title: "React.JS",
      },
      {
         platformsIcon: <Icons.ReactBule className={styles.reactPlatform} width={30} height={30} />,
         title: "React.JS",
      },
   ];
   return (
      <section className={styles.discover}>
         <div className={styles.discoverTop}>
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
         </div>
        
         <div className="row justify-content-between">
            <div className="col-md-3 col-lg-3">
               <div className={styles.discoverLeft}>
                  <div className={styles.discoverList}>
                     <h5 className={`${styles.subHeading} ${styles.subHeadingActive}`}>Web Platforms</h5>
                     <p className={styles.subContent}>We specialize in comprehensive website audits that provide valuable insights</p>
                  </div>

                  <h5 className={styles.subHeading}>Commerce</h5>
                  <h5 className={styles.subHeading}>Analytics & Marketing</h5>
                  <h5 className={styles.subHeading}>DevSecOps</h5>
               </div>
            </div>
            <div className="col-md-8 col-lg-8">
               <div className={styles.frontend}>
                  <h6 className={styles.subTitle}>Frontend</h6>
                  <div className={styles.platformsBtns}>
                     {frontendBtn.map((data, index) => (
                        <div key={index} className={styles.platformsBtn}>
                           <div className="d-flex align-items-center">
                              {data.platformsIcon}
                              <p>{data.title} </p>
                           </div>
                           <Icons.ArrowUpRight />
                        </div>
                     ))}
                  </div>
               </div>
               <div className={styles.backend}>
                  <h6 className={styles.subTitle}>Backend</h6>
                  <div className={styles.platformsBtns}>
                     {frontendBtn.map((data, index) => (
                        <div key={index} className={styles.platformsBtn}>
                           <div className="d-flex align-items-center">
                              {data.platformsIcon}
                              <p>{data.title} </p>
                           </div>
                           <Icons.ArrowUpRight />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Discover;
