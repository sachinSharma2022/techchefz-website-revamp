import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import RelatedCase from "@/components/relatedCase";
import Innovation from "@/components/portfolio/innovation";
import { getDataDynamic } from "@/lib/fetchData";
import NotFound from "@/app/not-found";
import { api_insight_insides_Page, api_Case_study_Page } from "@/lib/constants";

export async function generateMetadata({ params }) {
  const data = await getDataDynamic(api_insight_insides_Page);
  let index = 0;
  for (const i in data) {
    if (data[i].id == params.insightInside) {
      index = i;
    }
  }
  return {
    title: data[index].attributes.InsightOverview[0].Title,
    description: data[index].attributes.InsightOverview[0].Title,
    openGraph: {
      title: data[index].attributes.InsightOverview[0].Title,
      description: data[index].attributes.InsightOverview[0].Title,
      url: `https://demo.techchefz.com/insights/${params.insightInside}`,
      images: [
        {
          url: `https://cms-strapi.techchefz.com${data[index].attributes.InsightOverview[0]?.Image?.data?.attributes?.url}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const InsightInside = async ({ params }) => {
  const data = await getDataDynamic(api_insight_insides_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  let index = 0;
  for (const i in data) {
    if (data[i].id == params.insightInside) {
      index = i;
    }
  }

  return (
    <>
      {data ? (
        <>
          <InsightOverview
            props={data[index].attributes.InsightOverview}
            Insightinner={data[index].attributes.Insightinner}
            TechStackData={data[index].attributes.TechStackData}
          />
          <InsightDetail
            props={data[index].attributes.insightDetailData}
            BlockTitle={data[index].attributes.BlockTitle}
            index={data[index].id}
          />
          <RelatedCase props={data_related_cases} />
          <Innovation props={data[index].attributes.ourInnvotion} />
        </>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default InsightInside;
