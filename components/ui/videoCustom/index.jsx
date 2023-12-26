import React from "react";

import styles from "./style.module.scss"

const VideoCustom = (props) => {
   return (
      <div className={styles.videoCustom}>
         <video className={styles.video} width={props.width} height={props.height} >
            <source src={props.src} type="video/mp4" />
         </video>
      </div>
   );
};

export default VideoCustom;
