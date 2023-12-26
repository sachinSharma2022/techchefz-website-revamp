import styles from "./style.module.scss";

const VideoCustom = (props) => {
  return (
    <div className={styles.videoCustom}>
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
