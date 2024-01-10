"use client";
import React from "react";
import VideoCustom from "@/components/ui/videoCustom";
import { Icons } from "@/components/icons";
import Slider from "react-slick";

import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const TczLife = () => {
   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.5,
      slidesToScroll: 1,
      nextArrow: (
         <div>
            <Icons.sliderArrow />
         </div>
      ),
      prevArrow: (
         <div>
            <Icons.sliderArrow />
         </div>
      ),
   };
   return (
      <section className={styles.tczLife}>
         <div className={styles.tczLifeTop}>
            <div className="row justify-content-between m-0" >
               <div className="col-md-4 col-lg-4">
                  <h6 className={styles.tczLifeTitle}>Life at techchefz</h6>
                  <h3 className={styles.tczLifeHeading}>
                     Make an Impact from <span>Day One.</span>
                  </h3>
               </div>
               <div className="col-md-6 col-lg-6 pe-0" >
                  <div className="tczLifeSlider">
                     <Slider {...settings}>
                        <div className={styles.videoWapper}>
                           <ImageCustom  src={"/images/videoImage.png"} width={100} height={100} />
                        </div>
                        <div className={styles.videoWapper}>
                           <ImageCustom  src={"/images/videoImage.png"} width={100} height={100} />
                        </div>
                        <div className={styles.videoWapper}>
                           <ImageCustom  src={"/images/videoImage.png"} width={100} height={100} />
                        </div>
                        
                     </Slider>
                  </div>
               </div>
            </div>
         </div>

         <div className={styles.tczLifeContent}>
            <p>
               Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their
               simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to
               user experience experts. We demonstrate an excellent understanding of user needs and all of their designs are creative and elegant in
               their simplicity. They’re very well thought out and have an excellent response to feedback.{" "}
            </p>
         </div>
      </section>
   );
};

export default TczLife;
