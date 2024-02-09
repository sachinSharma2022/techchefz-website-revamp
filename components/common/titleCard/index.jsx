"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";

const TitleCard = (props) => {
  const { theme } = useContext(MyContext);
  return (
    <div className={cn(styles.titleCard, theme ? styles.titleCardDark : "")}>
      <h5>{props.title} </h5>
      <p>{props.content}</p>
    </div>
  );
};

export default TitleCard;
