import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import Innovation from "@/components/portfolio/innovation";
import { getDataDynamic, getData } from "@/lib/fetchData";
import NotFound from "@/app/not-found";
import { api_insights_Page, api_insight_insides_Page } from "@/lib/constants";
import RelatedInsight from "@/components/insightInside/relatedInsight";
import { rootURl } from "../../../lib/constants";
import { generateSlug } from "@/lib/utils";



export async function generateMetadata() {
  const data = await getData(api_insight_insides_Page);

  return {
    title: data?.SeoData?.metaTitle,
    description: data?.SeoData?.metaDescription,
    keywords: data?.SeoData?.keywords,
    metaRobots: data?.SeoData?.metaRobots,
    structuredData: data?.SeoData?.structuredData,
    metaViewport: data?.SeoData?.metaViewport,
    canonicalURL: data?.SeoData?.canonicalURL,
    metaSocialTitle: data?.SeoData?.metaSocial?.socialNetwork?.title,
    metaSocialDescription: data?.SeoData?.metaSocial?.socialNetwork?.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaSocial?.socialNetwork?.image?.data?.attributes?.url}`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  };
}
const InsightInside = async ({ params }) => {
  const data = await getDataDynamic(api_insight_insides_Page);
  const data1 = await getData(api_insights_Page);
  const [page] = data.filter(
    (value) =>
      generateSlug(value?.attributes?.InsightOverview[0].Title) ==
      params.insightInside
  );

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
            index={generateSlug(page?.attributes?.InsightOverview[0].Title)}
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
