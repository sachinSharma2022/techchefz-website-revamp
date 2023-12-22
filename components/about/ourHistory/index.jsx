"use client";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const OurHistory = () => {
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: (
      //    <button className={styles.btnNext}>
      //       <Icons.ArrowRight width={18} height={16} />
      //    </button>
      // ),
      // prevArrow: <Icons.ArrowLeft width={18} height={16} />,

      // responsive: [
      //    {
      //       breakpoint: 1199,
      //       settings: {
      //          slidesToShow: 2,
      //          slidesToScroll: 1,
      //          centerMode: false,
      //          arrows: true,
      //       },
      //    },
      //    {
      //       breakpoint: 600,
      //       settings: {
      //          slidesToShow: 1,
      //          slidesToScroll: 1,
      //          arrows: true,
      //       },
      //    },
      //    {
      //       breakpoint: 480,
      //       settings: {
      //          slidesToShow: 1,
      //          slidesToScroll: 1,
      //          arrows: true,
      //          centerPadding: "15px",
      //       },
      //    },
      // ],
   };
   return (
      <section className={styles.ourHistory}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-md-5 mb-4">
                  <h6 className={styles.ourHistoryTitle}>Our History</h6>
                  <h3 className={styles.ourHistoryHeading}>Tracing Innovation Through Time: Our IT Journey.</h3>
               </div>
            </div>

            {/* <div className={styles.ourHistorySlider}>
               <div className="row justify-content-between">
                  <div className="col-md-6 col-lg-5">
                     <h4>Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.</h4>
                     <p>
                        Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by enthusiasm and
                        determination, they set on a transformative journey to shape the future.
                     </p>
                     <div className={styles.sliderButtons}>
                        <button className={`${styles.btnPrev} `}>
                           <Icons.ArrowLeft width={18} height={16} />
                        </button>
                        <button className={styles.btnNext}>
                           <Icons.ArrowRight width={18} height={16} />
                        </button>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-5">
                     <div className={styles.OurHistoryImage}>
                        <ImageCustom src={"/images/img/about/slider1.png"} width={450} height={300} alt="slider-img" />
                     </div>
                  </div>
               </div>
            </div> */}
            <div className="ourHistorySlider">
               <Slider {...settings}>
                  <div>
                     <div className={styles.ourHistorySlider}>
                        <div className="row justify-content-between">
                           <div className="col-md-6 col-lg-5">
                              <h4>Bridging Dreams to Reality in a Transformative Journey of Innovation and Impact at TechChefz.</h4>
                              <p>
                                 Founded in 2017, TechChefz arose from a shared passion for technology, uniting a team of pioneers. Fueled by
                                 enthusiasm and determination, they set on a transformative journey to shape the future.
                              </p>
                              {/* <div className={styles.sliderButtons}>
                                    <button className={`${styles.btnPrev} `}>
                                       <Icons.ArrowLeft width={18} height={16} />
                                    </button>
                                    <button className={styles.btnNext}>
                                       <Icons.ArrowRight width={18} height={16} />
                                    </button>
                                 </div> */}
                           </div>
                           <div className="col-md-6 col-lg-5">
                              <div className={styles.OurHistoryImage}>
                                 <ImageCustom src={"/images/img/about/slider1.png"} width={450} height={300} alt="slider-img" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
               </Slider>
            </div>
            {/* <div>Progress bar</div> */}
         </div>
      </section>
   );
};

export default OurHistory;
