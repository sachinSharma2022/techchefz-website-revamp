import DetailBanner from "@/components/accelerators/acceleratorDetail/acceleratorDetailBanner";
import Impact from "@/components/accelerators/acceleratorDetail/acceleratorImpact";
import AcceleratorIndustry from "@/components/accelerators/acceleratorDetail/acceleratorIndustry";
import FeatureCard from "@/components/accelerators/acceleratorDetail/featureCard";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";
import { getDataDynamic, getData } from "@/lib/fetchData";
import { api_accelerators_details_Page, api_Case_study_Page, api_accelerators_Page } from "@/lib/constants";
import NotFound from "@/app/not-found";
import { generateSlug } from "@/lib/utils";

// Updated generateMetadata function to handle dynamic SEO data
export async function generateMetadata({ params }) {
  // Fetch the specific accelerator detail data based on the URL params
  const data = await getDataDynamic(api_accelerators_details_Page);

  // Find the page corresponding to the URL param (params.acceleratorsDetails)
  const [page] = data.filter(
    (value) => generateSlug(value?.attributes?.BrowserAccelerator?.Heading) === params.acceleratorsdDetails
  );

  // If the page is found, use its SEO data
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

const AcceleratorDetails = async ({ params }) => {
  // Fetch dynamic data for the accelerator details page
  const data = await getDataDynamic(api_accelerators_details_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  const data1 = await getData(api_accelerators_Page);

  // Find the correct accelerator page based on the slug from URL params
  const [page] = data.filter(
    (value) =>
      generateSlug(value?.attributes?.BrowserAccelerator?.Heading) === params.acceleratorsdDetails
  );

  return (
    <>
      {page ? (
        <div>
          <DetailBanner props={page.attributes.Banner} />
          <AcceleratorIndustry props={page.attributes.Media} />
          <Impact props={page.attributes.Impact} />
          <FeatureCard props={page.attributes.Challanges} />
          {/* <RelatedCase
            className="accelerator-related-style"
            props={data_related_cases}
            RelatedInsight={data1.RelatedInsight}
          /> */}
          <LetsWork className="padding-accelerator" contact={page.attributes.LetsWork} />
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
