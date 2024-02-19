"use client";
import PartnerCard from "@/components/ui/partnerCard";
import { MyContext } from "@/context/theme";
import { useContext, useState } from "react";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";
import LeftDrawer from "@/components/common/leftDrawer";
import { ImageCustom } from "@/components/ui/imageCustom";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";

const Partners = ({props}) => {
  
  const { theme, setTheme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

 
  return (
    <section className={`${styles.partner} ${theme ? styles.partnerDark : ""}`}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.headSection}>
          <h6 className={cn(styles.partnerTitle,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>

          </h6>
          <h3 className={cn(styles.partnerHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
            
          </h3>
        </div>

        <div className={styles.partnerCards}>
          {props?.Slider?.map((data, index) => (
            <PartnerCard
              key={index}
              imgSrc={data?.Image?.data?.attributes?.url?`${base_Uri}${data?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
              darkImgSrc={data?.Image?.data?.attributes?.url?`${base_Uri}${data?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
              cardTitle={data.Title}
              cardContent={data.Description}
              onClick={() =>{
                setIsOpen(true)

              }}
            />
          ))}
        </div>
      </div>
    
      <LeftDrawer
        title="wordpress"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          className={cn(styles.modalBody, theme ? styles.darkThemeStyle : "")}
        >
          <div className={styles.cardImg}>
            <ImageCustom
              src="/images/wordpress.png"
              width={110}
              height={40}
              alt="partner-logo"
              className={styles.imgStyle}
            />
          </div>
          <p className={styles.modalContent}>
            Shopify is a leading e-commerce platform that enables businesses of
            all sizes to set up, operate, and scale their online stores.
            It&lsquo;s known for its user-friendly interface, making it
            accessible even to those without technical expertise. Shopify offers
            a variety of customizable templates, allowing businesses to design
            their stores to match their brand&lsquo;s aesthetics and
            requirements.
          </p>
          <Link href="https://www.shopify.com/" target="_blank">
            https://www.shopify.com/
          </Link>
        </div>
      </LeftDrawer>
    </section>
  );
};

export default Partners;
