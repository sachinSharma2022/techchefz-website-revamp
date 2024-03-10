"use client";

import { MyContext } from "@/context/theme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

const HomepageIntro = (props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  const { theme } = useContext(MyContext);
  const videoRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef / 100);
    const vw = (coef) => window.innerWidth * (coef / 100);
    videoRef.current.play();

    if (isBigScreen) {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: `.${styles.videoCont}`,
          pin: true,
          markers: false,
          start: "top 80rem",
          end: "400rem ",
        });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.video}`,
            scrub: 1,
            start: "top 500rem",
            // end: "+=" + (230 + window.innerHeight),
            markers: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        tl.to(`.${styles.video}`, {
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          paddingLeft: "0px",
          paddingRight: "0px",
          duration: 1,
        }).to(`.${styles.video}`, {
          width: "1440px",
          height: "100%",
          minWidth: "1440px",
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
          paddingBottom: "8rem",
          duration: 1,
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div
      className={`${styles.videoCustom} ${theme ? styles.videoCustomDark : ""}`}
    >
      <div className={styles.videoCont}>
        <video
          className={cn(styles.video)}
          id="my-video"
          width={props.width}
          height={props.height}
          autoplay
          playsinline
          muted
          loop
          ref={videoRef}
          {...props}
        >
          <source src={props.src} type={props.type || "video/mp4"} />
        </video>
      </div>
    </div>
  );
};

export default HomepageIntro;
