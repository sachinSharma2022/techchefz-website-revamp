import React from "react";

import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const OurGallery = () => {
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
            <div className="row">
               <div className="column">
                  <ImageCustom src={"/images/img/gallery/img1.png"} width={500} height={300}  alt="gallery-img" />
               </div>
               <div className="column">
                  <ImageCustom src={"/images/img/gallery/img2.png"} height={148} width={100} alt="gallery-img" />
                  <ImageCustom src={"/images/img/gallery/img3.png"} height={148} width={100} alt="gallery-img" />
               </div>
               <div className="column">
                  <ImageCustom src={"/images/img/gallery/img1.png"} height={100} width={100} alt="gallery-img" />
                  <div className="row">
                     <div className="column ">
                        <ImageCustom src={"/images/img/gallery/img2.png"} height={200} width={400} alt="gallery-img" />
                     </div>
                     <div className="column">
                        <ImageCustom src={"/images/img/gallery/img3.png"} height={100} width={300} alt="gallery-img" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurGallery;
