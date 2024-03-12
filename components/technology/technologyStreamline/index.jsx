"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";

import Link from "next/link";

const Streamline = ({ props }) => {
  const isBigScreen = useMediaQuery({ minWidth: 1025 });
  let component = useRef(null);
  const { theme, setTheme } = useContext(MyContext);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (isBigScreen) {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.streamLineWrapper}`,
            scrub: 1,
            start: "top 6%",
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        tl.to(`.${styles.streamLineSection}`, {
          xPercent: -101,
          ease: "none",
        })
          .to(
            `.${styles.streamLineCards}`,
            {
              xPercent: -100,
              ease: "none",
              duration: 1,
            },
            "<"
          )
          .to(`.${styles.streamLineCards}`, {
            duration: 0.1,
          });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <div
      id="streamLineWrapper"
      className={cn(
        styles.streamLineWrapper,
        theme ? styles.streamlineDark : ""
      )}
    >
      <section className={styles.streamLineSection}>
        <div className={cn("primary-container", styles.flexContainer)}>
          <h3
            className={cn(styles.streamlineTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h3>
          <p
            className={styles.streamlineContent}
            dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
          ></p>
        </div>
      </section>

      {/* Other sections */}
      <section ref={component} className={styles.streamLineCards}>
        {props?.Slider?.map((data, index) => (
          <div key={index}>
            <div className={styles.streamlineCard}>
              <div className={styles.iconStyle}>
                <ImageCustom
                  height={100}
                  width={100}
                  src={
                    data?.Image?.data?.attributes?.url
                      ? `${base_Uri}${data?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                />
              </div>
              <div className={styles.contentSection}>
                <h4 className={styles.cardTitle}>{data.Title} </h4>
                <p className={styles.cardContent}>{data.Description}</p>
                <div>
                  <Link href={data.BtnLink}>
                    <Button
                      variant={theme ? "lightBlueOutline" : "outline"}
                      size="md"
                    >
                      {data.Btn} <Icons.ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Streamline;
