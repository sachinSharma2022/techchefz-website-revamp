import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import RelatedCase from "@/components/relatedCase";
import { getData } from "@/lib/fetchData";
import { api_insight_insides_Page } from "@/lib/constants";

const InsightInside = async() => {
  const data = await getData(api_insight_insides_Page)

  return (
    <>
      <InsightOverview props={data.InsightOverview} Insightinner={data.Insightinner} TechStackData={data.TechStackData}/>
      <InsightDetail props={data.insightDetailData}/>
      {/* <RelatedCase subTitle="INSIGHTS" title="Explore More of Our Insights" /> */}
    </>
  );
};

export default InsightInside;
