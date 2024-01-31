"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import styles from "./style.module.scss";

const Consistent = () => {
  const { theme, setTheme } = useContext(MyContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <section
    ref={targetRef}
      className={`${styles.consistent}  ${theme ? styles.consistentDark : ""}`}
    >
      <div className={styles.primaryConatiner}>
      <div className={cn("primary-container")}>
        <div   className={styles.consistentImg}>

          <motion.div style={{ y }} >
          <ImageCustom
            src={"/images/consistent-img.png"}
            width={1000}
            height={600}
            alt="img"
          />
          </motion.div>
          
        </div>
        <div className={styles.contentSec}>
          <h3 className={styles.consistentTitle}>
            <span>7+ years</span> of consistent excellence, meeting deadlines
            and budgets with precision.
          </h3>
          <div>
            <p className={styles.consistentText}>
              For over seven years, Techchefz has been at the forefront of
              technological innovation. But what truly sets us apart is our
              unwavering commitment to excellence consistently, year after year.
            </p>
            <Button variant="outline" size="sm">
              Learn More <Icons.ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Consistent;
