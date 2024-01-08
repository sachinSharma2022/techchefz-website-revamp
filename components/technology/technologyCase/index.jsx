import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import styles from "./styles.module.scss";
import CaptionCard from "@/components/ui/captionCard";

const TechnologyCase = () => {
    const caseCardData = [
        {
            imgSrc: "/images/case1.png",
            title: "Revolutionizing Retail: A Digital Transition",
          },
          {
            imgSrc: "/images/case2.png",
            title: "CMS Implementation for the Motorcycle Brand",
          },
          {
            imgSrc: "/images/case1.png",
            title: "Framework for Web Portal of the luxury hotel chain",
          },
    ]
   return (
      <section className={styles.technologyCase}>
            <div className={styles.caseTop}>
         <div className="row justify-content-between align-items-end">
            <div className="col-md-7 col-lg-7">
               <h6 className={styles.caseTitle}>Case Study</h6>
               <h3 className={styles.caseHeading}>Together in every code. Discover the strength of our partnership.</h3>
            </div>
            <div className="col-md-2 col-lg-2">
               <Button variant="outline" size="sm">
                  Explore Now <Icons.ArrowRight size={18} />
               </Button>
            </div>
            </div>
            
         </div>
        
         <div className={styles.technologyCaseCards}>
            {caseCardData.map((data,index) =>(
                <CaptionCard key={index} imgSrc={data.imgSrc} title={data.title} />
            ))}
         
         </div>
      </section>
   );
};

export default TechnologyCase;
