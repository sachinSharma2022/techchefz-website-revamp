"use client";

import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import SearchInput from "@/components/ui/searchInput";
import PostCard from "@/components/ui/postCard";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

const InsightFeatures = ({ props, feature }) => {
  const { theme, setTheme } = useContext(MyContext);
  console.log(feature, "feat");

  return (
    <section className={!theme ? styles.insightFeatures : styles.darkMode}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.insightHeader}>
          <div className={styles.searchButton}>
            <SearchInput theme={theme} />
          </div>
          <div className={styles.serviceBtn}>
            {props.map((buttonItem) => (
              <button
                variant="outline"
                size="sm"
                // onClick={() => filterItem(buttonItem.id)}
                key={buttonItem}
              >
                {buttonItem.Title}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.featureInsight}>
          <h6
            className={cn(styles.insightSubHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${feature[0].Title}` }}
          ></h6>
          <div className={styles.featureInsightCards}>
            {feature
              .filter(
                (data) => data?.attributes?.InsightOverview[0]?.Featured == true
              )
              .map((data, index) => (
                <PostCard
                  className={styles.featureInsightCard}
                  key={index}
                  imgSrc={
                    data?.attributes?.InsightOverview[0]?.Image?.data
                      ?.attributes?.url
                      ? `${base_Uri}${data?.attributes?.InsightOverview[0]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  title={data?.attributes?.InsightOverview[0].Title}
                  date={data?.attributes?.updatedAt}
                  cardStyle={styles.featureImgBox}
                  theme={theme}
                  href={`/insights/${data?.id}`}
                />
              ))}
          </div>
        </div>
        <div className={styles.allInsight}>
          <h6 className={styles.insightSubHeading}>{feature[1].Title} </h6>
          <div className={styles.allInsightCards}>
            {feature
              .filter(
                (data) => data?.attributes?.InsightOverview[0]?.Featured != true
              )
              .map((data, index) => (
                <PostCard
                  key={index}
                  imgSrc={
                    data?.attributes?.InsightOverview[0]?.Image?.data
                      ?.attributes?.url
                      ? `${base_Uri}${data?.attributes?.InsightOverview[0]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  title={data?.attributes?.InsightOverview[0].Title}
                  date={data?.attributes?.updatedAt}
                  theme={theme}
                  href={`/insights/${data?.id}`}
                />
              ))}
          </div>

          <div className={styles.insightButton}>
            <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
              {feature[1].Button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightFeatures;
