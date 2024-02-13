import InsightBanner from "@/components/insights/insightBanner";
import InsightFeatures from "@/components/insights/insightFeatures";
import Innovation from "@/components/portfolio/innovation";
import React from "react";
import { getData } from "@/lib/fetchData";
import { api_insights_Page } from "@/lib/constants";

const Insights = async () => {
  const data = await getData(api_insights_Page);

  return (
    <div>
      <InsightBanner props={data.InsightBanner} />
      <InsightFeatures
        props={data.InsightFeatures}
        feature={data.featureInsight}
      />
      <Innovation props={data.ourInnvotion} />
    </div>
  );
};

export default Insights;
