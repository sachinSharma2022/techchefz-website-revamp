"use client";

import { useContext, useEffect, useRef } from "react";
import { MyContext } from "@/context/theme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./style.module.scss";

const VideoCustom = (props) => {
  const { theme } = useContext(MyContext);
  const videoRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    videoRef.current.play();
    // let ctx = gsap.context(() => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: `.${styles.videoCustom}`,
    //       scrub: 1,
    //       start: "top 11%",
    //       end: "bottom +=500",

    //       pin: true,
    //       markers: true,
    //       invalidateOnRefresh: true,
    //       anticipatePin: 1,
    //     },
    //   });
    // });
    // return () => ctx.revert();

  }, []);

  return (
    <div
      className={`${styles.videoCustom} ${theme ? styles.videoCustomDark : ""}`}
    >
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
  );
};

export default VideoCustom;
