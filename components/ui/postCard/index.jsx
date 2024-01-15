import React from "react";
import { ImageCustom } from "../imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const PostCard = (props) => {
   return (
      <div className={`${styles.postCard}  ${props.className}`}>
         <div className={styles.cardImg}>
            <ImageCustom src={props.imgSrc} width={1360} height={500} alt="captionImg" />
         </div>
         <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>{props.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
               <p className={styles.cardDate}>{props.date} </p>
               <Icons.ArrowLongRight size={18} />
            </div>
         </div>
      </div>
   );
};

export default PostCard;
