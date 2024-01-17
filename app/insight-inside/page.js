import React from "react";
import InsightOverview from "@/components/insightInside/insightOverview";
import InsightDetail from "@/components/insightInside/insightDetail";
import ExploreInsights from "@/components/insightInside/exploreInsight"

const InsightInside = () => {
  return (
    <>
      <InsightOverview />
      <InsightDetail />
      <ExploreInsights />
    </>
  );
};

export default InsightInside;
