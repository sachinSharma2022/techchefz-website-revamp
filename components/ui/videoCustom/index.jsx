"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "@/context/theme";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";

const VideoCustom = (props) => {
  const { theme } = useContext(MyContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

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

      <button onClick={handlePlayPause} className={styles.videoControl}>
        {isPlaying ? (
          <span>
            <Icons.Pause />
            Pause
          </span>
        ) : (
          <span>
            <Icons.Play />
            Play
          </span>
        )}
      </button>
    </div>
  );
};

export default VideoCustom;
