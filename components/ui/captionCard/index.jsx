import React from "react";

import styles from "./styles.module.scss";
import { ImageCustom } from "../imageCustom";
import { Icons } from "@/components/icons";
import Link from "next/link";

const CaptionCard = (props) => {
  return (
    <Link href="/" className={`${styles.captionCard} ${props.className} card`}>
      <div className={styles.cardImg}>
        <ImageCustom
          src={props.imgSrc}
          width={1360}
          height={450}
          alt="captionImg"
        />
      </div>
      <div className={styles.cardBody}>
        <h2 className={`${styles.cardText} ${props.textStyle}`}>
          {props.title}
        </h2>
        <Icons.ArrowLongRight size={18} />
      </div>
    </Link>
  );
};

export default CaptionCard;
