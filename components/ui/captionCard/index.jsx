"use client";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import Link from "next/link";
import { useContext } from "react";
import { ImageCustom } from "../imageCustom";

import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";

const CaptionCard = (props) => {
   const { theme, setTheme } = useContext(MyContext);
   return (
      <Link
         href={props.params ? `${props.redirect}` : `/portfolio/${props.redirect}`}
         className={`${styles.captionCard} ${props.className} ${theme ? styles.captionCardDark : ""} card`}
      >
         <div className={styles.cardImg}>
            <ImageCustom src={props.imgSrc} width={1360} height={450} alt="captionImg" />
         </div>
         <div className={styles.cardBodyWrapper}>
            <div className={styles.cardBody}>
               <h4 className={`${styles.cardText} ${props.textStyle}`}>{props.title}</h4>
               <Icons.ArrowLongRight size={18} />
            </div>
            {props.postDate && <p className={styles.cardDate}>Feb 16, 2024-2min</p>}
         </div>
      </Link>
   );
};

export default CaptionCard;
