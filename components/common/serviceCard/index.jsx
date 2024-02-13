"use client";

import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";


const ServiceCard = (props) => {
  const { theme } = useContext(MyContext);

  // return (
    
  //   <div className={cn(styles.serviceBox, theme ? styles.serviceBoxDark : "")}>
  //     <div className={styles.bgIcon}>{props.icon}</div>
  //     <h4 className={styles.sbTitle}>{props.subTitle}</h4>
  //     <p className={styles.sbText}>{props.subText}</p>
  //   </div>
  // );

  return (
    <div className={cn(styles.serviceBox, theme ? styles.serviceBoxDark : "")}>
      <div className={styles.bgIcon}>
        <ImageCustom width={40} height={40} src={props.icon} alt="Service Icon" className={styles.iconImage} />
      </div>
      <h4 className={styles.sbTitle}>{props.subTitle}</h4>
      <p className={styles.sbText}>{props.subText}</p>
    </div>
  );
  

  
};
export default ServiceCard;
