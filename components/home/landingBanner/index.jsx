"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "../../ui/button";

// Style
import styles from "./style.module.scss";


const LandingBanner = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={cn(
        styles.landingBannerStyle,
        theme ? styles.landingBannerDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.title} >
         {props.title} <span /> {props.description} <span />
          <div className={styles.contentContainer}>
            <span>{props.SubTitle1} </span>
            <span className={styles.slider}>
              <span className={styles.text1}>{props.SubTitle2}</span>
              <span className="text2"> {props.SubTitle3}</span>
              <span className="text3"> {props.SubTitle4}</span>
            </span>
          </div>
        </h1>

        <Link href="/contact-us">
          <Button variant={theme?"blueBtnDark":"blueBtn"} size="md">
            {props.button} <Icons.ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LandingBanner;
