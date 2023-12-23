import React from "react";

const VideoCustom = (props) => {
   return (
      <div>
         <video width={props.width} height={props.height} controls>
            <source src={props.src} type="video/mp4" />
         </video>
      </div>
   );
};

export default VideoCustom;
