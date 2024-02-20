import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import RelatedCase from "@/components/relatedCase";
import { getDataDynamic } from "@/lib/fetchData";
import { api_insight_insides_Page } from "@/lib/constants";

const InsightInside = async ({ params }) => {
  const data = await getDataDynamic(api_insight_insides_Page);
  let index = 0;
  for (const i in data) {
    if (data[i].id == params.insightInside) {
      index = i;
    }
  }

  return (
    <>
      <InsightOverview
        props={data[index].attributes.InsightOverview}
        Insightinner={data[index].attributes.Insightinner}
        TechStackData={data[index].attributes.TechStackData}
      />
      <InsightDetail
        props={data[index].attributes.insightDetailData}
        BlockTitle={data[index].attributes.BlockTitle}
      />
      <RelatedCase
        subTitle="INSIGHTS"
        title="Explore More of Our Insights"
        props={data[index].attributes.CaseStudy}
      />
    </>
  );
};

export default InsightInside;
