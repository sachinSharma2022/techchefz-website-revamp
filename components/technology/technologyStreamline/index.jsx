"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";

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

  // const streamlineCard = [
  //   {
  //     icons: (
  //       <Icons.Market className={styles.cardIcon} width={120} height={120} />
  //     ),
  //     title: "Content Management ",
  //     content:
  //       " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
  //   },
  //   {
  //     icons: (
  //       <Icons.Platforms className={styles.cardIcon} width={120} height={120} />
  //     ),
  //     title: "E-commerce",
  //     content:
  //       " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
  //   },
  //   {
  //     icons: (
  //       <Icons.Transform className={styles.cardIcon} width={120} height={120} />
  //     ),
  //     title: "Micro services",
  //     content:
  //       " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
  //   },
  //   {
  //     icons: (
  //       <Icons.Transform className={styles.cardIcon} width={120} height={120} />
  //     ),
  //     title: "Cloud & DevSecOps",
  //     content:
  //       " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
  //   },
  //   {
  //     icons: (
  //       <Icons.Platforms className={styles.cardIcon} width={120} height={120} />
  //     ),
  //     title: "Data Intelligence",
  //     content:
  //       " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
  //   },
  //   {
  //     icons: (
  //       <Icons.Platforms className={styles.cardIcon} width={120} height={120} />
  //     ),
  //     title: "Analysis Automation",
  //     content:
  //       " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
  //   },
  // ];
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
          <h3 className={styles.streamlineTitle} dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}>

          </h3>
          <p className={styles.streamlineContent} dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}>

          </p>
        </div>
      </section>

      {/* Other sections */}
      <section ref={component} className={styles.streamLineCards}>
        {props?.Slider?.map((data, index) => (
          <div key={index}>
            <div className={styles.streamlineCard}>
              <div className={styles.iconStyle}>
              <Image height={100}  width={100} src= {data?.Image?.data?.attributes?.url?`${base_Uri}${data?.Image?.data?.attributes?.url}`:`${base_Uri}/`} />
               
              </div>
              <h6 className={styles.cardTitle}>{data.Title} </h6>
              <p className={styles.cardContent}>{data.Description}</p>
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                {data.Btn} <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Streamline;
