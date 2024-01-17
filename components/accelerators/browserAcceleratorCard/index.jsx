import React from "react";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const BrowserAcceleratorCard = () => {
   return (
      <div className={styles.browserAcceleratorCard}>
         <div className={styles.cardHeader}>
            <div className={styles.cardSubTitle}>
               <Icons.CustomDevelopment width={36} height={36} />
               <p>Retail and Consumer Goods</p>
            </div>
            <Icons.ArrowUpRight width={24} height={24} />
         </div>
         <h6 className={styles.cardTitle}>Improve On-Shelf Availability</h6>
         <p className={styles.cardContent}>
            Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...
         </p>

         <div className={styles.cardsTags}>
            <Button variant="outline" size="xs">
               Featured
            </Button>
            <Button variant="outline" size="xs">
               New
            </Button>
            <Button variant="outline" size="xs">
               Trending
            </Button>
         </div>
      </div>
   );
};

export default BrowserAcceleratorCard;
