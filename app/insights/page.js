import InsightBanner from "@/components/insights/insightBanner";
import InsightFeatures from "@/components/insights/insightFeatures";
import Innovation from "@/components/portfolio/innovation";
import React from "react";
import NotFound from "../not-found";
import { getData, getDataDynamic } from "@/lib/fetchData";
import { api_insights_Page, api_insight_insides_Page } from "@/lib/constants";



export async function generateMetadata() {
  const data = await getData(api_insights_Page); 
  
  return {
    title: data?.SeoData?.metaTitle,
    description: data?.SeoData?.metaDescription,
    keywords: data?.SeoData?.keywords,
    metaRobots: data?.SeoData?.metaRobots,
    structuredData: data?.SeoData?.structuredData,
    metaViewport: data?.SeoData?.metaViewport,
    canonicalURL: data?.SeoData?.canonicalURL,
    metaSocialTitle: data?.SeoData?.metaSocial?.socialNetwork?.title,
    metaSocialDescription: data?.SeoData?.metaSocial?.socialNetwork?.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaSocial?.socialNetwork?.image?.data?.attributes?.url}`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
   
  };
}

const Insights = async () => {
  const data = await getData(api_insights_Page);
  const data_inside = await getDataDynamic(api_insight_insides_Page);

  return (
    <>
      {data ? (
        <div>
          <InsightBanner props={data.InsightBanner} />
          <InsightFeatures
            props={data.InsightFeatures}
            featureInsight={data.featureInsight}
            feature={data_inside}
          />
          <Innovation props={data.ourInnvotion} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Insights;
