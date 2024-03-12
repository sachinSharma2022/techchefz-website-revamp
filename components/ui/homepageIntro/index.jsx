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
  const isBigScreenDesktop = useMediaQuery({ query: "(max-width: 1440px)" });
  const { theme } = useContext(MyContext);
  const videoRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    videoRef.current.play();

    if (isBigScreen) {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: `.${styles.videoCont}`,
          pin: true,
          markers: true,
          start: "top 80rem",
          end: "400rem",
        });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.video}`,
            scrub: 1,
            start: "top 500rem",
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        tl.to(`.${styles.video}`, {
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          duration: 1,
        }).to(`.${styles.video}`, {
          width: isBigScreenDesktop ? "1440px" : "1228px",
          height: "100%",
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
