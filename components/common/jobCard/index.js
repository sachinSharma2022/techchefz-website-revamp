"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";

const JobCard = (props ) => {
 
  
  const { theme } = useContext(MyContext);
  return (
    <div
      className={cn(styles.jobCardContainer, theme ? styles.darkJobCard : "")}
    >
      <div className={styles.cardDiv}>
        <h1>{props.title}</h1>
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
