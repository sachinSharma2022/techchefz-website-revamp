"use client";

import { useContext, useEffect, useRef } from "react";
import { MyContext } from "@/context/theme";

import styles from "./style.module.scss";

const VideoCustom = (props) => {
  const { theme } = useContext(MyContext);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
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
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCustom;
