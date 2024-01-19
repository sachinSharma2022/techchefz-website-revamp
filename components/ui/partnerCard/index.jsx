import { Icons } from "@/components/icons";
import { ImageCustom } from "../imageCustom";

import styles from "./style.module.scss";

const PartnerCard = (props) => {
  return (
    <button className={styles.partnerCard} onClick={props.onClick}>
      <div className={styles.cardImg}>
        <ImageCustom
          src={props.imgSrc}
          width={300}
          height={300}
          alt="partner-logo"
          className={styles.imgStyle}
        />
        {props.arrowUp && <Icons.ArrowUpRight />}
      </div>
      <h6 className={styles.cardTitle}>{props.cardTitle} </h6>
      <p className={styles.cardContent}> {props.cardContent} </p>
    </button>
  );
};

export default PartnerCard;
