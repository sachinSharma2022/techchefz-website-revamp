"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.scss";

const VideoCustom = ({ src }) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(`.${styles.videoContainer}`, {
      scale: 1/3,
      scrollTrigger: {
        trigger: `.${styles.videoContainer}`,
        scrub: 3,
      },
    });
  }, []);
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted data-speed="auto">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCustom;
