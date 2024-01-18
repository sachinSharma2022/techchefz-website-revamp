import React from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

const DetailBanner = () => {
   return (
      <section className={styles.banner}>
         <div className="primary-container">
            <div className={styles.bannerContent}>
               <h1 className={styles.bannerTitle}>
                  Better LLMs With <span> Better Data</span> Using Cleanlab Studio
               </h1>
               <div className={styles.bannerRight}>
                  <p>
                     The Conversational Search System is designed to provide users with the ability to perform searches through conversational
                     queries, which go beyond the capabilities of traditional search systems. By leveraging advanced natural language processing and
                     vector search technologies, users can find specific products or information in a more intuitive and human-like manner.
                  </p>
                  <Button variant="blueBtn" className={styles.headerBtn} size="md">
                     Request a Demo <Icons.ArrowRight size={20} className="ms-2" />
                  </Button>
               </div>
            </div>

            <ImageCustom src={"/images/accelerators.png"} width={1360} height={400} alt="banner-img" />
         </div>
      </section>
   );
};

export default DetailBanner;
