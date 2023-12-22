import React from "react";

import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const OurGallery = () => {
  const galleryImages = [
    {
      imgSrc:"/images/img/gallery/img1.png",
      width:"400",
      height:"600"
    },
    {
      imgSrc:"/images/img/gallery/img2.png" ,
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img3.png" ,
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img1.png",
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img2.png" ,
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img3.png" ,
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img1.png" ,
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img2.png" ,
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img3.png" ,
      width:"300",
      height:"300"
    },
    {
      imgSrc:"/images/img/gallery/img1.png" ,
      width:"300",
      height:"300"
    },
  ]
   return (
      <section>
         <div className="container">
            <div className="row">
               <div className="col-md-5 col-lg-5">
                  <h6>Our Gallery</h6>
                  <h3>From Vision to Reality</h3>
                  <p>
                     Our workspace reflects our philosophy: open, collaborative, and vibrant. Take a virtual tour of where the magic happens, from
                     state-of-the-art labs to cozy brainstorming nooks.
                  </p>
               </div>
            </div>
         </div>
         <div className={styles.galleryImages}>
          {galleryImages.map((data,index)=>(
            <div key={index} className={styles.galleryImage}>
            <ImageCustom src={data.imgSrc} width={data.width} height={data.height}  alt="gallery-img" />
            </div>
          ))}
            
         </div>
      </section>
   );
};

export default OurGallery;
