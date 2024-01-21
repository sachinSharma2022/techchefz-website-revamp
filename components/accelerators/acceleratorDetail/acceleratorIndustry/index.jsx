"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const AcceleratorIndustry = () => {
   const { theme, setTheme } = useContext(MyContext);
   return (
      <section className={`${styles.industry} ${theme ? styles.industryDark : ""} `}>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-md-4 col-lg-4">
                  <div className={styles.industryLeft}>
                     <div className="mb-4">
                        <h6> Industry</h6>
                        <h5>Media & Entertainment</h5>
                     </div>

                     <h6>Tags</h6>
                     <div className={styles.serviceBtn}>
                        <Button variant="outline" size="xs">
                           Trending
                        </Button>
                     </div>
                  </div>
               </div>
               <div className="col-md-7 col-lg-7">
                  <div className={styles.industryRight}>
                     <h3 className={styles.industryHeading}>Improve training data to boost LLM performance</h3>
                     <p className={styles.industryText}>
                        Unlock the potential of natural language processing in your business with our latest accelerator, the Conversational Search
                        System. This cutting-edge tool transcends the limits of traditional search functionalities, enabling your users to find
                        products and information through intuitive conversational queries.
                     </p>
                     <Button variant="outline" size="sm">
                     Access the Git Repository <Icons.ArrowRight size={18} />
                     </Button>
                  </div>
               </div>
            </div>

            <div className={styles.industryImg}>
               <ImageCustom src="/images/accelerator2.png" width={1300} height={500} alt="website-img" />
            </div>
         </div>
      </section>
   );
};

export default AcceleratorIndustry;
