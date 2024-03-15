import InsightBanner from "@/components/insights/insightBanner";
import InsightFeatures from "@/components/insights/insightFeatures";
import Innovation from "@/components/portfolio/innovation";
import React from "react";
import NotFound from "../not-found";
import { getData, getDataDynamic } from "@/lib/fetchData";
import { api_insights_Page, api_insight_insides_Page } from "@/lib/constants";

export const metadata = {
  title: "Insights | TechChefz Digital",
  description:
    "Stay informed with the latest insights and trends in the digital industry from TechChefz Digital's team of experts.",
};

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
