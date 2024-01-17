import React from "react";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const BrowserAcceleratorCard = (props) => {
   return (
      <div className={styles.browserAcceleratorCard}>
         <div className={styles.cardHeader}>
            <div className={styles.cardSubTitle}>
               <span>{props.cardIcon} </span>
               {/* <Icons.CustomDevelopment width={36} height={36} /> */}
               <p>{props.subHeading} </p>
            </div>
            <Icons.ArrowUpRight width={24} height={24} />
         </div>
         <h6 className={styles.cardTitle}>{props.heading} </h6>
         <p className={styles.cardContent}>
            {props.text}
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
