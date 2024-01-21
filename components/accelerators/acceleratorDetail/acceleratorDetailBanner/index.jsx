"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

const DetailBanner = () => {
<<<<<<< HEAD
   const { theme, setTheme } = useContext(MyContext);
   return (
      <section className={`${styles.banner} ${theme ? styles.bannerDark : ""}`}>
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
=======
  return (
    <section className={styles.banner}>
      <div className="primary-container">
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>
            Better LLMs With <span> Better Data</span> Using Cleanlab Studio
          </h1>
          <div className={styles.bannerRight}>
            <p>
              The Conversational Search System is designed to provide users with
              the ability to perform searches through conversational queries,
              which go beyond the capabilities of traditional search systems. By
              leveraging advanced natural language processing and vector search
              technologies, users can find specific products or information in a
              more intuitive and human-like manner.
            </p>
            <Button variant="blueBtn" className={styles.headerBtn} size="md">
              Request a Demo <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.industryImg}>
        <ImageCustom
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1300}
          height={1000}
          alt="website-img"
        />
      </div>
    </section>
  );
>>>>>>> aa99921a6b3eb0490a7ed92af662b1066261d6a1
};

export default DetailBanner;
