import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import Innovation from "@/components/portfolio/innovation";
import { getDataDynamic } from "@/lib/fetchData";
import NotFound from "@/app/not-found";
import { api_insight_insides_Page } from "@/lib/constants";
import RelatedInsight from "@/components/insightInside/relatedInsight";

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
    twitter: {
      card: "summary_large_image",
      title: data[index].attributes.InsightOverview[0].Title,
      description: data[index].attributes.InsightOverview[0].Title,
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
          <RelatedInsight
            className="insight-detail-related-slider"
            props={data}
            params={params}
          />
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
