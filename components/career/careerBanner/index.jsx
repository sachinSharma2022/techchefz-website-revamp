"use client";
import React from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import Marquee from "react-fast-marquee";

import styles from "./style.module.scss";

const CareerBanner = () => {
  const { theme, setTheme } = useContext(MyContext);

   const galleryImages = [
      {
         imgSrc:
            "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMGV2ZW50fGVufDB8fDB8fHww",
      },
      {
         imgSrc:
            "https://plus.unsplash.com/premium_photo-1664474566083-a9e64eb4c080?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZSUyMHBhcnR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG9mZmljZSUyMHBhcnR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG9mZmljZSUyMHBhcnR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://plus.unsplash.com/premium_photo-1664474588632-cd84a870aec7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG9mZmljZSUyMHBhcnR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1438557068880-c5f474830377?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG9mZmljZSUyMHBhcnR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyaXB8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1589634752793-aabd114351ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvdXAlMjB0cmlwfGVufDB8fDB8fHww",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
         imgSrc:
            "https://plus.unsplash.com/premium_photo-1682390303366-7463dcbec281?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdyb3VwJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNlbGVicmF0aW9ufGVufDB8fDB8fHww",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1577046848358-4623c0859b8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweWVhcnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnR8ZW58MHx8MHx8fDA%3D",
      },
      {
         imgSrc:
            "https://plus.unsplash.com/premium_photo-1683740128021-effcc3f70ef9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1vdmllfGVufDB8fDB8fHww",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVuJTIwb25saW5lfGVufDB8fDB8fHww",
      },
      {
         imgSrc:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1biUyMG9ubGluZXxlbnwwfHwwfHx8MA%3D%3D",
      },
   ];
   return (
      <section className={`${styles.landingBannerStyle}`}>
         <div className={styles.contentSection}>
                  <h1 className={styles.title}>
                     Join one of the most <span className={styles.titleHighlight}> resourceful </span>tech teams in India.
                  </h1>
               <div >
                  <p className={styles.leadText}>
                     Discover your future with us. Explore opportunities, values, and culture. Join a dynamic and innovative team at Techchefz.
                  </p>
                  <Button variant="blueBtn" className={styles.headerBtn} size="md">
                     View Openings <Icons.ArrowRight size={20} className="ms-2" />
                  </Button>
               </div>
         </div>

      <Marquee delay={1}>
        <div className={`${styles.galleryImages} scroll-gallery-images`}>
          {galleryImages.map((data, index) => (
            <div key={index} className={`${styles.galleryImage} card-${index}`}>
              <ImageCustom
                src={data.imgSrc}
                width={300}
                height={300}
                alt="gallery-img"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default CareerBanner;
