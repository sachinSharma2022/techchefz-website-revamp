"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import Link from "next/link";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const CoeService = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={cn(styles.coeService, theme ? styles.coeServiceDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={styles.coeServiceImg}>
          <ImageCustom
            src={`${base_Uri}${props[0]?.Image?.data.attributes.url}`}
            width={2560}
            height={1068}
            alt="img"
          />
        </div>
        <TextRevel>
          <div className={styles.contentSec}>
            <h3
              className={cn(styles.coeServiceTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}
            ></h3>
            <div>
              <p className={styles.coeServiceText}>{props[0]?.Description}</p>
              <Link href={props[0].BtnLink}>
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  size="md"
                >
                  {props[0]?.Btn} <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </TextRevel>
      </div>
    </section>
  );
};

export default CoeService;
