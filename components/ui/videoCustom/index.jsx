'use client'
import styles from "./style.module.scss";
import { gsap } from 'gsap';
import {useEffect} from 'react';
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const VideoCustom = (props) => {

   
    
    
  
  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger)
    const tl=gsap.timeline(
      {scrollTrigger:{trigger:`.${styles.video}`,scrub:1,markers:false ,start:"top 80%",end:"bottom 0%"}}
    );

    
    tl.to(`.${styles.video}`,{width:"100%",duration:4}).to(`.${styles.video}`,{y:941,duration:8,width:"5%", height: "10%",delay:4}).to(`.${styles.video}`,{borderRadius: '50%',duration: 1})
    
  }, []);
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
