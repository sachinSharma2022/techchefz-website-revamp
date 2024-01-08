import React from "react";
import { ImageCustom } from "../imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const PartnerCard = (props) => {
  return (
    <div className={styles.partnerCard}>
      <div className={styles.cardImg}>
        <ImageCustom
          src={props.imgSrc}
          width={300}
          height={300}
          alt="partner-logo"
          className={styles.imgStyle}
        />
        {props.arrowUp && <Icons.ArrowUpRight width={22} height={22} />}
      </div>
      <h6 className={styles.cardTitle}>{props.cardTitle} </h6>
      <p className={styles.cardContent}> {props.cardContent} </p>
    </div>
  );
};

export default PartnerCard;
