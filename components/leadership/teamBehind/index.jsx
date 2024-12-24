"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

import Link from "next/link";

const TeamBehind = ({ props }) => {
  const isBigScreen = useMediaQuery({ minWidth: 1025 });
  let component = useRef(null);
  const { theme, setTheme } = useContext(MyContext);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (isBigScreen) {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.teamBehindWrapper}`,
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
            `.${styles.teamCards}`,
            {
              xPercent: -100,
              ease: "none",
              duration: 1,
            },
            "<"
          )
          .to(`.${styles.teamCards}`, {
            duration: 0.1,
          });
      });

      return () => ctx.revert();
    }
  }, []);

  // const teamCard = [
  //   {
  //     name: "Mayank Maggon",
  //     designation: "CEO & CTO",
  //     src: "/images/img/team/team1.png",
  //   },
  //   {
  //     name: "Akshit Maggon",
  //     designation: "Director",
  //     src: "/images/img/team/team2.png",
  //   },
  //   {
  //     name: "Kunal Bhardwaj",
  //     designation: "Director Technology",
  //     src: "/images/img/team/team1.png",
  //   },
  //   {
  //     name: "Mayank Maggon",
  //     designation: "CEO & CTO",
  //     src: "/images/img/team/team1.png",
  //   },
  //   {
  //     name: "Akshit Maggon",
  //     designation: "Director",
  //     src: "/images/img/team/team2.png",
  //   },
  //   {
  //     name: "Mayank Maggon",
  //     designation: "CEO & CTO",
  //     src: "/images/img/team/team1.png",
  //   },
  // ];

  return (
    <div
      id="streamLineWrapper"
      className={cn(
        styles.teamBehindWrapper,
        theme ? styles.teamBehindDark : ""
      )}
    >
      <div className={styles.streamLineSection}>
        <section className={cn("header-container", "full")}>
          <div className={cn("primary-container")}>
            <h1 className={cn(styles.bannerTitle, "gradient-text")}>
              {props?.Title}
            </h1>
          </div>
        </section>

        <div className={styles.bannerImg}>
          <ImageCustom
            src={
              props?.Image?.data?.attributes?.url
                ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
                : `${base_Uri}/`
            }
            alt=""
            width={2560}
            height={1068}
          />
        </div>
      </div>

      {/* Other sections */}
      <section ref={component} className={styles.teamCards}>
        {props?.CardLeader?.map((items) => (
          <div key={items} className={styles.teamCard}>
            <div className={styles.teamCardBg}>
              <div className={styles.cardHead}>
                <h4>{items.Title}</h4>
                <p>{items.Desinagtion}</p>
              </div>
              {/* <Link className={styles.linkedInIcon} href="/" target="_blank">
                <Icons.Linkedin width={34} height={34} />
              </Link> */}
              <ImageCustom
                src={
                  items?.Image?.data?.attributes?.url
                    ? `${base_Uri}${items?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                width={1000}
                height={1000}
                className={styles.teamImg}
                alt={items?.ProfileImage?.data?.attributes?.alternativeText}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamBehind;
