"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import Link from "next/link";
import styles from "./style.module.scss";

const AcceleratorBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.banner} ${theme ? styles.bannerDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={cn(styles.bannerContent, "header-container")}>
          <h1
            className={cn(styles.bannerTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h1>
          <div className={styles.bannerRight}>
            <p
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></p>
             <Link href= {props?.BtnLink}>
            <Button
              variant={theme ? "blueBtnDark" : "blueBtn"}
              className={styles.headerBtn}
              size="md"
            >
              {props?.Btn} <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorBanner;
