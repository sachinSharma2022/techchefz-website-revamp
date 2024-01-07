'use client'
import styles from "./style.module.scss";
import { gsap } from 'gsap';
import {useEffect} from 'react';
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const VideoCustom = (props) => {

  function distanceBetweenElements(elementOne, elementTwo) {
    let distance = -1;
    
    const x1 = elementOne.offsetTop;
    const y1 = elementOne.offsetLeft;
    const x2 = elementTwo.offsetTop;
    const y2 = elementTwo.offsetLeft;
    const xDistance = x1 - x2;
    const yDistance = y1 - y2;
    
    distance = Math.sqrt(
      (xDistance * xDistance) + (yDistance * yDistance)
    );
    
    return distance;
  }
 
    
  
  
  useEffect(() => {
    const pointOne = document.getElementById("globalimg");
const pointTwo = document.getElementById("my-video");
const spaceBetween = distanceBetweenElements(pointOne, pointTwo);

    gsap.registerPlugin(TextPlugin, ScrollTrigger)
    const tl=gsap.timeline(
      {scrollTrigger:{trigger:`.${styles.video}`,scrub:1,markers:true ,start:"top 80%"}}
    );

    
    tl.to(`.${styles.video}`,{width:"100%",duration:4,borderRadius: '0%'},).to(`.${styles.video}`,{y:Math.floor(spaceBetween)+145
    ,duration:8,width:"5%", height: "10%",delay:4,borderRadius: '0%'}).to(`.${styles.video}`,{borderRadius: '50%',duration: 1})
    
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
