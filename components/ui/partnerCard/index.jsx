import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "../imageCustom";

import styles from "./style.module.scss";

const PartnerCard = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div
      className={`${styles.partnerCard} ${theme ? styles.partnerCardDark : ""}`}
      onClick={props.onClick}
    >
      <div className={styles.cardImg}>
        {!theme ? (
          <ImageCustom
            src={props.imgSrc}
            width={300}
            height={300}
            alt="partner-logo"
            className={styles.imgStyle}
          />
        ) : (
          <ImageCustom
            src={props.darkImgSrc}
            width={300}
            height={300}
            alt="partner-logo"
            className={styles.imgStyle}
          />
        )}
      </div>
      <h6 className={styles.cardTitle}>{props.cardTitle} </h6>
      <p className={styles.cardContent}>{props.cardContent} </p>
    </div>
  );
};

export default PartnerCard;
