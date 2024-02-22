import InsightBanner from "@/components/insights/insightBanner";
import InsightFeatures from "@/components/insights/insightFeatures";
import Innovation from "@/components/portfolio/innovation";
import React from "react";
import { getData, getDataDynamic } from "@/lib/fetchData";
import { api_insights_Page, api_insight_insides_Page } from "@/lib/constants";

export const metadata = {
  title: "Insights | TechChefz Digital",
  description: "Insights | TechChefz Digital",
};

const Insights = async () => {
  const data = await getData(api_insights_Page);
  const data_inside = await getDataDynamic(api_insight_insides_Page);

  return (
    <div>
      <InsightBanner props={data.InsightBanner} />
      <InsightFeatures props={data.InsightFeatures} feature={data_inside} />
      <Innovation props={data.ourInnvotion} />
    </div>
  );
};

export default Insights;
