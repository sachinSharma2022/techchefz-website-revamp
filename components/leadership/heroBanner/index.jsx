"use client";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import TextRevel from "@/components/ui/sectionAnimation";
import Link from "next/link";

import styles from "./style.module.scss";

const HeroBanner = ({ props }) => {

  const { theme } = useContext(MyContext);
  return (
    <section
      className={`${styles.heroBannerStyle} ${theme ? styles.heroBannerDark : ""
        }`}
    >
      <TextRevel>
        <div className={cn("header-container")}>
          <div className="primary-container grid-col-2">
            <h1
              className={cn(styles.title, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.title}` }}
            >
              {/* {props?.title} */}
            </h1>
            <div className={styles.contentSec}>
              <p
                className={cn(styles.leadText, "gradient-text")}
              // dangerouslySetInnerHTML={{ __html: `${props.subtitle}` }}
              >
                {props?.subtitle}
              </p>
              <Link href={props?.BtnLink}>
                <Button
                  variant={theme ? "blueBtnDark" : "blueBtn"}
                  className={styles.headerBtn}
                  size="md"
                >
                  {props?.Btn}
                  {/* {props?.Btn} */}
                  <Icons.ArrowRight size={20} className="ms-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </TextRevel>
    </section>
  );
};

export default HeroBanner;
