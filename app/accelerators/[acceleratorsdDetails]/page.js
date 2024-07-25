import DetailBanner from "@/components/accelerators/acceleratorDetail/acceleratorDetailBanner";
import Impact from "@/components/accelerators/acceleratorDetail/acceleratorImpact";
import AcceleratorIndustry from "@/components/accelerators/acceleratorDetail/acceleratorIndustry";
import FeatureCard from "@/components/accelerators/acceleratorDetail/featureCard";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";
import { getDataDynamic,getData } from "@/lib/fetchData";
import { api_accelerators_details_Page,api_Case_study_Page,api_accelerators_Page } from "@/lib/constants";
import NotFound from "@/app/not-found";
import { generateSlug } from "@/lib/utils";


export async function generateMetadata() {
  const data = await getData(api_About_Page);

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

const AcceleratorDetails = async ({ params }) => {
  const data = await getDataDynamic(api_accelerators_details_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  const data1 = await getData(api_accelerators_Page);
  const [page] = data.filter(
    (value) =>
      generateSlug(value?.attributes?.BrowserAccelerator?.Heading) ==
      params.acceleratorsdDetails
  );
  return (
    <>
      {data ? (
        <div>
          <DetailBanner props={page.attributes.Banner} />
          <AcceleratorIndustry props={page.attributes.Media} />
          <Impact props={page.attributes.Impact} />
          <FeatureCard props={page.attributes.Challanges} />
          <RelatedCase
            className="cms-related-style"
            props={data_related_cases}
            RelatedInsight={data1.RelatedInsight}
          />
          <LetsWork contact={page.attributes.LetsWork} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default AcceleratorDetails;
