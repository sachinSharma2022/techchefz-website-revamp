import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

const ImageCaptionCard = () => {
  const imageCaptionData = [
    {
      description: " Nike’s Expansion and Global Outlook",
      imgSrc:
        "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description:
        " Revolutionizing Retail: A Digital Transition for Royal Enfield",
      imgSrc:
        "https://images.unsplash.com/photo-1575209426388-3f545c9a7490?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description: " Fitbit OS: A Digital Transforming Fitness Tracking",
      imgSrc:
        "https://images.unsplash.com/photo-1543164904-8ff92670a192?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description: " Mobile Stock Trading App Impact Analysis",
      imgSrc:
        "https://images.unsplash.com/photo-1579225663317-c0251b4369bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description: " Goldman Sachs' Trading Strategy Success",
      imgSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description: " Audi’s Global Reach and Dynamics",
      imgSrc:
        "https://images.unsplash.com/photo-1646405871744-2005e64f8e32?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description:
        " Sustainable Energy: A Success Story for EV Vehicles Sustainable Energy abcd...",
      imgSrc:
        "https://images.unsplash.com/photo-1700411882036-f20df01413ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description: "Goldman Sachs' Trading Strategy Success",
      imgSrc:
        "https://images.unsplash.com/photo-1666625519702-7270420bb4f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className={`${styles.captionCardStyle} captionCardSection`}>
      <div className={styles.wrapper}>
        {imageCaptionData.map((data, index) => (
          <div key={index} className={`grid-${index}`}>
            <div className={`${styles.imageCard} card`}>
              <div className={styles.cardImg}>
                <ImageCustom
                  src={data.imgSrc}
                  width={1360}
                  height={450}
                  alt="captionImg"
                />

                <div className={styles.cardBadges}>
                  <span className={styles.badges}>Web Design</span>
                  <span className={styles.badges}>E-Commerce</span>
                  <span className={styles.badges}>Retail</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.cardText}>{data.description}</h2>
                <Icons.ArrowLongRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCaptionCard;
