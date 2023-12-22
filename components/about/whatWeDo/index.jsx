import React from "react";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";

const WhatWeDo = () => {
   const cardData = [
      {
         icon: <Icons.PlatformSelection className={styles.workCardIcon} width={100} height={100} />,
         title: "Digital Strategy",
         content:
            "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology.",
      },
      {
         icon: <Icons.PlatformSelection className={styles.workCardIcon} width={100} height={100} />,
         title: "Platform Selection",
         content:
            "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology.",
      },
      {
         icon: <Icons.PlatformBuild className={styles.workCardIcon} width={100} height={100} />,
         title: "Platform Builds",
         content:
            "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology.",
      },
      {
         icon: <Icons.ProductBuild className={styles.workCardIcon} width={100} height={100} />,
         title: "Product Builds",
         content:
            "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology.",
      },
      {
         icon: <Icons.Multiple className={styles.workCardIcon} width={100} height={100} />,
         title: "Multiple Infrastructure",
         content:
            "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology.",
      },
      {
         icon: <Icons.ManengedServices className={styles.workCardIcon} width={100} height={100} />,
         title: "Managed Services",
         content:
            "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology.",
      },
      {
         icon: <Icons.TeamAugmention className={styles.workCardIcon} width={100} height={100} />,
         title: "Team Augmentation",
         content:
            "TechChefz employs a digital strategy blending advanced technology and customer focus to drive innovation and operational efficiency in IT. The Digital strategy integrates cutting-edge technology.",
      },
   ];
   return (
      <section className={styles.whatWeDo}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-md-5 mb-4">
                  <h6 className={styles.weDoTitle}>What we do</h6>
                  <h3 className={styles.weDoHead}>Empowering Innovation: Our Role in the Tech Industry.</h3>
               </div>
            </div>

            <div className={styles.workCardWrapper}>
               {cardData.map((data, index) => (
                  <div key={index} className={styles.workCard}>
                     {data.icon}
                     <h6>{data.title} </h6>
                     <p>{data.content} </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default WhatWeDo;
