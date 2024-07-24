"use client";

import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";

import PostCard from "@/components/ui/postCard";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import { generateSlug } from "@/lib/utils";

const InsightFeatures = ({ props, featureInsight, feature }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section className={!theme ? styles.insightFeatures : styles.darkMode}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.insightHeader}>
          <div className={styles.searchButton}>
            {/* <SearchInput theme={theme} /> */}
          </div>
          <div className={styles.serviceBtn}></div>
        </div>
        <div className={styles.featureInsight}>
          <h5
            className={cn(styles.insightSubHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${featureInsight[0].Title}` }}
          ></h5>
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
                  alt = {data?.attributes?.InsightOverview[0]?.Image?.data
                    ?.attributes?.alternativeText}
                  title={data?.attributes?.InsightOverview[0].Title}
                  date={data?.attributes?.InsightOverview[0]?.Date}
                  readTime={data?.attributes?.InsightOverview[0]?.ReadingTime}
                  cardStyle={styles.featureImgBox}
                  theme={theme}
                  href={`/insights/${generateSlug(
                    data?.attributes?.InsightOverview[0].Title
                  )}`}
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
                  alt = { data?.attributes?.InsightOverview[0]?.Image?.data
                    ?.attributes?.alternativeText}
                  title={data?.attributes?.InsightOverview[0].Title}
                  date={data?.attributes?.InsightOverview[0]?.Date}
                  readTime={data?.attributes?.InsightOverview[0]?.ReadingTime}
                  theme={theme}
                  href={`/insights/${generateSlug(
                    data?.attributes?.InsightOverview[0].Title
                  )}`}
                />
              ))}
          </div>
          {feature.length > 9 && (
            <div className={styles.insightButton}>
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                {feature[1].Button}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InsightFeatures;
