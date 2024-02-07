"use client";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./styles.module.scss";

const ServiceInfoCard = (props) => {
  const { theme } = useContext(MyContext);
  return (
    <div className={cn(styles.serviceBox, theme ? styles.serviceBoxDark : "")}>
      <div className={styles.numberCardFlex}>
        <h2 className={styles.sbTitle}>{props.sbTitle}</h2>
        <div className={styles.bgIcon}>
          <ImageCustom
                width={56} height={56}
                src={props.icon}
                alt="bannerImg"
              /></div>
      </div>

      <p className={styles.sbText}>{props.sbText}</p>
    </div>
  );
};

export default ServiceInfoCard;
