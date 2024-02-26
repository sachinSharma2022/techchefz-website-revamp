import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "../imageCustom";

import styles from "./style.module.scss";

const PartnerCard = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <button
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
        <div className={styles.iconContainer}>
        <span className={styles.iconAnimateOne}>
        {props.arrowUp && <Icons.ArrowUpRight />}
        </span>
        
        <span className={styles.iconAnimate}>
        {props.arrowUp && <Icons.ArrowUpRight />}
        </span>
        
        </div>
       
      </div>
      <h6 className={styles.cardTitle}>{props.cardTitle} </h6>
      <p className={styles.cardContent}>{props.cardContent} </p>
    </button>
  );
};

export default PartnerCard;
