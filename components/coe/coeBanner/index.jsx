"use client"
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from '@/components/ui/imageCustom'

import styles from "./style.module.scss"

const CoeBanner = () => {
   const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.banner} ${theme ? styles.bannerDark : ""}`}>
    <div className="primary-container">
       <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>
          Techchefz’s Global<span>  Centre of Excellence</span>
          </h1>
          <div className={styles.bannerRight}>
             <p>
                Technology-driven solutions are becoming the norm in our industry. More than ever, customers expect us to assess and adopt innovation to optimise our performance and create more value. The Kent Global Centre of Excellence (CoE) helps keep us at the forefront of change in every strand of our business.
             </p>
             
          </div>
       </div>

       <ImageCustom src={"/images/accelerators.png"} width={1360} height={400} alt="banner-img" />
    </div>
 </section>
  )
}

export default CoeBanner