import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import RelatedCase from "@/components/relatedCase";

const InsightInside = () => {
  return (
    <>
      <InsightOverview />
      <InsightDetail />
      {/* <RelatedCase subTitle="INSIGHTS" title="Explore More of Our Insights" /> */}
    </>
  );
};

export default InsightInside;
