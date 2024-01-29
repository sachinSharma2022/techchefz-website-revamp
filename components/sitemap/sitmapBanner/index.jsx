"use client"
import React from 'react'
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss"

function SitmapBanner() {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.sitmapBanner} ${theme ? styles.sitemapBannerDark : ""}`}>
        <div className={styles.sitemap}>
            <h1 className={styles.bannerHeading}>Sitemap</h1>
            <p className={styles.bannerText}>Technology-driven solutions are becoming the norm in our industry. More than ever, customers expect us to assess and adopt innovation to.</p>
        </div>
    </section>
  )
}

export default SitmapBanner