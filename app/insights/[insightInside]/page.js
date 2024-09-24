import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import Innovation from "@/components/portfolio/innovation";
import { getDataDynamic, getData } from "@/lib/fetchData";
import NotFound from "@/app/not-found";
import { api_insights_Page, api_insight_insides_Page } from "@/lib/constants";
import RelatedInsight from "@/components/insightInside/relatedInsight";
import { generateSlug } from "@/lib/utils";

// Updated generateMetadata function to handle dynamic SEO data
export async function generateMetadata({ params }) {
  // Fetch data for all insights
  const data = await getDataDynamic(api_insight_insides_Page);

  // Find the page based on the URL parameter (slug)
  const [page] = data.filter(
    (value) => generateSlug(value?.attributes?.InsightOverview[0].Title) === params.insightInside
  );

  // If page data exists, fetch SEO data from the specific insight
  const seoData = page?.attributes?.SeoData;

  return {
    title: seoData?.metaTitle || "Default Title",
    description: seoData?.metaDescription || "Default Description",
    keywords: seoData?.keywords || "default, keywords",
    metaRobots: seoData?.metaRobots || "index,follow",
    structuredData: seoData?.structuredData || null,
    metaViewport: seoData?.metaViewport || "width=device-width, initial-scale=1",
    canonicalURL: seoData?.canonicalURL || null,
    metaSocialTitle: seoData?.metaSocial?.socialNetwork?.title || "Default Social Title",
    metaSocialDescription: seoData?.metaSocial?.socialNetwork?.description || "Default Social Description",
    images: seoData?.metaSocial?.socialNetwork?.image?.data
      ? [
          {
            url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${seoData.metaSocial.socialNetwork.image.data.attributes.url}`,
            width: 800,
            height: 600,
          },
        ]
      : [],
  };
}

const InsightInside = async ({ params }) => {
  // Fetch dynamic data for the insight page
  const data = await getDataDynamic(api_insight_insides_Page);
  const data1 = await getData(api_insights_Page);
  // Find the correct insight page based on the slug from URL params
  const [page] = data.filter(
    (value) =>
      generateSlug(value?.attributes?.InsightOverview[0].Title) === params.insightInside
  );

  return (
    <>
      {page ? (
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
