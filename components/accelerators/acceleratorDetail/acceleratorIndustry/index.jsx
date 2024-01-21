"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const AcceleratorIndustry = () => {
<<<<<<< HEAD
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
=======
  return (
    <section className={styles.industry}>
      <div className="primary-container">
        <div className={styles.gridSection}>
          <div className={styles.industryLeft}>
            <div className="mb-4">
              <h6>Industry</h6>
              <h4 className={styles.heading}>Media & Entertainment</h4>
>>>>>>> aa99921a6b3eb0490a7ed92af662b1066261d6a1
            </div>

            <h6>Tags</h6>
            <div className={styles.serviceBtn}>
              <Button variant="outline" size="xs">
                Trending
              </Button>
            </div>
          </div>
          <div>
            <div className={styles.industryRight}>
              <h3 className={styles.industryHeading}>
                Improve training data to boost LLM performance
              </h3>
              <p className={styles.industryText}>
                Unlock the potential of natural language processing in your
                business with our latest accelerator, the Conversational Search
                System. This cutting-edge tool transcends the limits of
                traditional search functionalities, enabling your users to find
                products and information through intuitive conversational
                queries.
              </p>
              <Button variant="lightBlueOutline" className="info" size="md">
                Access the Git Repository <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.industryImg}>
          <ImageCustom
            src="https://images.unsplash.com/photo-1559163499-413811fb2344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1300}
            height={800}
            alt="website-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AcceleratorIndustry;
