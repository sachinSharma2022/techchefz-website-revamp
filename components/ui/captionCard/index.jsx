import React from "react";

import styles from "./styles.module.scss";
import { ImageCustom } from "../imageCustom";
import { Icons } from "@/components/icons";

const CaptionCard = (props) => {
   return (
      <div className={`${styles.captionCard} card`}>
         <div className={styles.cardImg}>
            <ImageCustom src={props.imgSrc} width={1360} height={450} alt="captionImg" />
         </div>

         <div className={styles.cardBody}>
            <h2 className={styles.cardText}>{props.title} </h2>
            <Icons.ArrowLongRight size={18} />
         </div>
      </div>
   );
};

export default CaptionCard;
