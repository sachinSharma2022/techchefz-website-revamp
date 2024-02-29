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
      href="/"
      className={cn(
        styles.captionCard,
        props.className,
        theme ? styles.captionCardDark : "",
        "card"
      )}
    >
      <div className={styles.cardImg}>
        <ImageCustom
          src={props.imgSrc}
          width={1360}
          height={450}
          alt="captionImg"
        />
      </div>
      <div className={styles.cardBody}>
        <h4 className={`${styles.cardText} ${props.textStyle}`}>
          {props.title}
        </h4>
        <Icons.ArrowLongRight size={18} />
      </div>
    </Link>
  );
};

export default CaptionCard;
