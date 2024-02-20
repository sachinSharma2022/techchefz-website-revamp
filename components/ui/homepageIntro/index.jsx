"use client";

import { MyContext } from "@/context/theme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";

import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

const HomepageIntro = (props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  const { theme } = useContext(MyContext);
  const videoRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const vh = (coef) => window.innerHeight * (coef/100);
const vw = (coef) => window.innerWidth * (coef/100);
    videoRef.current.play();

    if (isBigScreen) {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.video}`,
            scrub: 1,
            start: "top 20%",
            end: "+=" + (272 + window.innerHeight),
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        ScrollTrigger.create({
          trigger: `.${styles.videoCont}`,
          pin: true,
          markers: false,
          start: "top "+vh(10),
          end: "+=" + (252 + window.innerHeight),
        });
        tl.to(`.${styles.video}`, {
          width: "100%",
          height:"100%",
        duration: 5,
          borderRadius: "0%",
        })
          .to(`.${styles.video}`, {
            width: "70%",
            height: "70%",
            duration: 4,
            borderRadius: "0%",
          })
          .to(
            `.${styles.video}`,
            {
              y: 50,
              duration: 8,
              width: "5%",
              top: "10%",
              height: "10%",
              borderRadius: "10%",
            },
            ">8"
          )
          .to(`.${styles.video}`, { borderRadius: "50%", duration: 1 });
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
          className={styles.video}
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
