"use client"
import React from 'react'
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss"

function SitemapPages() {
    const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.sitemapPages} ${theme ? styles.sitemapPagesDark : ""}`}>
        <div className={styles.sitemapPage}>
            <h6>About us</h6>
            <h6>Contact us</h6>
            <h6>Homepage</h6>
            <h6>Portfolio</h6>
            <h6>Privacy Policy</h6>
            <h6>Solutions</h6>
            <h6>Terms of Use</h6>
        </div>
        <div className={styles.sitemapContent}>
            <h6>Technology</h6>
            <p>Analysis Automation</p>
            <p>Cloud & DevSecOps</p>
            <p>CMS</p>
            <p>Commerce</p>
            <p>Data Intelligence</p>
            <p>Microservices</p>
        </div>
        <div className={styles.sitemapContent}>
            <h6>More</h6>
            <p>Accelerators</p>
            <p>Careers</p>
            <p>Center of Excellence</p>
            <p>Insights</p>
        </div>
    </section>
  )
}

export default SitemapPages