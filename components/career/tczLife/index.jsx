"use client";
import React from "react";
import { Icons } from "@/components/icons";
import Slider from "react-slick";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

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

   const sliderVideo = [
      {
         video :"/images/videoImage.png"
      },
      {
         video :"/images/videoImage.png"
      },
      {
         video :"/images/videoImage.png"
      },
      {
         video :"/images/videoImage.png"
      },
   ]
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
                        {sliderVideo.map((data,index)=>(
                           <div key={index} className={styles.videoWapper}>
                           <ImageCustom  src={data.video} width={500} height={500} />
                        </div>
                        ))}
                        
                      
                        
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
               their simplicity. They’re very well thought out and have an excellent response to feedback.
            </p>
         </div>
      </section>
   );
};

export default TczLife;
