"use client";

import { useContext } from "react";
import { MyContext } from "@/app/context/theme";

import styles from "./style.module.scss";

const VideoCustom = (props) => {
  const { theme, setTheme } = useContext(MyContext);
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
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCustom;
