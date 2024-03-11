import InsightDetail from "@/components/insightInside/insightDetail";
import InsightOverview from "@/components/insightInside/insightOverview";
import RelatedCase from "@/components/relatedCase";
import Innovation from "@/components/portfolio/innovation";
import { getDataDynamic } from "@/lib/fetchData";
import NotFound from "@/app/not-found";
import { api_insight_insides_Page, api_Case_study_Page } from "@/lib/constants";

export const metadata = {
  metadataBase: new URL("https://demo.techchefz.com/"),
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://demo.techchefz.com/insights/10",
    images: [
      {
        url: "https://demo.techchefz.com/_next/image?url=http%3A%2F%2F127.0.0.1%3A4561%2Fuploads%2FTitle_Image_fd88ba718f.webp&w=1200&q=75", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },
};

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
