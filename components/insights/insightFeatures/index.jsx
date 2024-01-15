import React from "react";
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/ui/searchInput";

import styles from "./style.module.scss";
import CaptionCard from "@/components/ui/captionCard";
import PostCard from "@/components/ui/postCard";

const InsightFeatures = () => {
   const buttonVariants = [
      {
         buttonTitle: "All",
         id: "all",
      },
      {
         buttonTitle: "Cloud Computing",
         id: "business",
      },
      {
         buttonTitle: "Cyber Security",
         id: "devOps",
      },
      {
         buttonTitle: "More",
         id: "backEnd",
      },
   ];
   const featureInsight=[
    {
        imgSrc: "/images/insights/insight1.png",
        title: "Artificial Intelligence Meets Blockchain: Say Hello to xAI",
        date: "Dec 28, 2023 - 8 Min read",
     },
     {
        imgSrc: "/images/insights/insight2.png",
        title: "Cloud Computing: Strategies for Seamless Migration and Optimization",
        date: "Dec 29, 2023 - 8 Min read",
     },
     {
        imgSrc: "/images/insights/insight3.png",
        title: "Big Data Insights: Harnessing the Power of Analytics in Business",
        date: "Dec 28, 2023 - 8 Min read",
     },
   ]

   const allInsightData = [
      {
         imgSrc: "/images/insights/insight1.png",
         title: "Artificial Intelligence Meets Blockchain: Say Hello to xAI",
         date: "Dec 28, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight2.png",
         title: "Cloud Computing: Strategies for Seamless Migration and Optimization",
         date: "Dec 29, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight3.png",
         title: "Big Data Insights: Harnessing the Power of Analytics in Business",
         date: "Dec 28, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight4.png",
         title: "The Revolution of IoT: Enhancing Everyday Life with Smart Technology",
         date: "Dec 28, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight5.png",
         title: "The Rise of Remote Work: Tools and Strategies for Effective Collaboration....",
         date: "Dec 28, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight6.png",
         title: "The Future of Virtual Reality: Trends and Potential in Various Sectors",
         date: "Dec 28, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight4.png",
         title: "The Revolution of IoT: Enhancing Everyday Life with Smart Technology",
         date: "Dec 28, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight5.png",
         title: "The Rise of Remote Work: Tools and Strategies for Effective Collaboration....",
         date: "Dec 28, 2023 - 8 Min read",
      },
      {
         imgSrc: "/images/insights/insight6.png",
         title: "The Future of Virtual Reality: Trends and Potential in Various Sectors",
         date: "Dec 28, 2023 - 8 Min read",
      },
      
   ];
   return (
      <section className={styles.insightFeatures}>
         <div className={styles.insightHeader}>
            <SearchInput />
            <div className={styles.serviceBtn}>
               {buttonVariants.map((buttonItem) => (
                  <Button
                     variant="outline"
                     size="sm"
                     // onClick={() => filterItem(buttonItem.id)}
                     key={buttonItem}
                  >
                     {buttonItem.buttonTitle}
                  </Button>
               ))}
            </div>
         </div>
         <div className={styles.featureInsight}>
         <h6 className={styles.insightSubHeading}>Our Featured Insights </h6>
         <div className={styles.featureInsightCards}>
               {featureInsight.map((data, index) => (
                  <PostCard className={styles.featureInsightCard} key={index} imgSrc={data.imgSrc} title={data.title} date={data.date} />
               ))}
            </div>
         </div>
         <div className={styles.allInsight}>
            <h6 className={styles.insightSubHeading}>All Insights </h6>
            <div className={styles.allInsightCards}>
               {allInsightData.map((data, index) => (
                  <PostCard key={index} imgSrc={data.imgSrc} title={data.title} date={data.date} />
               ))}
            </div>

            <div className={styles.insightButton}>
               <Button  variant="outline" size="sm">
                  Show More
               </Button>
            </div>
         </div>
      </section>
   );
};

export default InsightFeatures;
