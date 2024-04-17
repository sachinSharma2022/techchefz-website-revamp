import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import Innovation from "@/components/portfolio/innovation";
import { getDataDynamic, getData } from "@/lib/fetchData";
import NotFound from "@/app/not-found";
import { api_insights_Page, api_insight_insides_Page } from "@/lib/constants";
import RelatedInsight from "@/components/insightInside/relatedInsight";
import { rootURl } from "../../../lib/constants";

export async function generateMetadata({ params }) {
  const data = await getDataDynamic(api_insight_insides_Page);

  const [page] = data.filter((value) => value.id == params.insightInside);
  return {
    title: page.attributes.InsightOverview[0].Title,
    description: page.attributes.InsightOverview[0].Title,
    openGraph: {
      title: page.attributes.InsightOverview[0].Title,
      description: page.attributes.InsightOverview[0].Title,
      url: `${rootURl}/insights/${params.insightInside}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${page.attributes.InsightOverview[0]?.Image?.data?.attributes?.url}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.attributes.InsightOverview[0].Title,
      description: page.attributes.InsightOverview[0].Title,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${page.attributes.InsightOverview[0]?.Image?.data?.attributes?.url}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const InsightInside = async ({ params }) => {
  const data = await getDataDynamic(api_insight_insides_Page);
  const data1 = await getData(api_insights_Page);
  const [page] = data.filter((value) => value.id == params.insightInside);

  return (
    <>
      {data ? (
        <>
          <InsightOverview
            props={page.attributes.InsightOverview}
            Insightinner={page.attributes.Insightinner}
            TechStackData={page.attributes.TechStackData}
          />
          <InsightDetail
            props={page.attributes.insightDetailData}
            BlockTitle={page.attributes.BlockTitle}
            index={page.id}
          />
          <RelatedInsight props={data} params={params} data1={data1} />
          <Innovation props={page.attributes.ourInnvotion} />
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
