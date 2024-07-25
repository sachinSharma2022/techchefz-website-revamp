"use client";

import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import styles from "./style.module.scss";

const JobCard = (props) => {
  const { theme } = useContext(MyContext);
  return (
    <div
      className={cn(styles.jobCardContainer, theme ? styles.darkJobCard : "")}
    >
      <div className={styles.cardDiv}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.content}</p>
        <div className={styles.spanDiv}>
          <div className={styles.spanDetail}>
            <ImageCustom
              src={
                props?.icon[0]?.Image?.data?.attributes?.url
                  ? `${base_Uri}${props?.icon[0]?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={16}
              height={16}
              alt="banner-img"
            />
            <span>{props.exp}</span>
          </div>
          <div className={styles.spanDetail}>
            <ImageCustom
              src={
                props?.icon[1]?.Image?.data?.attributes?.url
                  ? `${base_Uri}${props?.icon[1]?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={16}
              height={16}
              alt="banner-img"
            />
            <span>{props.location}</span>
          </div>
        </div>
        <Link href={`/careers/${props.link}`}>
          <Button variant={theme ? "lightBlueBtn" : "blueBtn"} size="md">
            Apply
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
