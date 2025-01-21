import AdobeSection from "@/components/aem/adobeSection";
import AemServices from "@/components/aem/aemServices";
import AemTheProcess from "@/components/aem/AemTheProcess";
import AemHeroBanner from "@/components/aem/heroBanner";
import AemImageBanner from "@/components/aem/imageBanner";
import AemTestimonials from "@/components/aem/testimonials";
import WhyChooseUs from "@/components/aem/whyChooseUs";
import RelatedCase from "@/components/relatedCase";
import { api_Case_study_Page, api_google_ads_Page } from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";
import NotFound from "../not-found";
import ClientScrollWrapper from "@/app/aem/useLocomotiveScroll";

export async function generateMetadata() {
  const data = await getData(api_google_ads_Page);

  return {
    title: data?.SeoData?.metaTitle,
    description: data?.SeoData?.metaDescription,
    keywords: data?.SeoData?.keywords,
    metaRobots: data?.SeoData?.metaRobots,
    structuredData: data?.SeoData?.structuredData,
    metaViewport: data?.SeoData?.metaViewport,
    canonicalURL: data?.SeoData?.canonicalURL,
    metaSocialTitle: data?.SeoData?.metaSocial?.socialNetwork?.title,
    metaSocialDescription:
      data?.SeoData?.metaSocial?.socialNetwork?.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaSocial?.socialNetwork?.image?.data?.attributes?.url}`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  };
}

const AEMPage = async () => {
  const data = await getData(api_google_ads_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);

  return (
    <>
      {data ? (
        <div className="overflow-hidden scroll-smooth">
          <AemHeroBanner props={data.HeroBanner} />
          <AemImageBanner props={data.imagebanner} />
          <ClientScrollWrapper>
            <WhyChooseUs props={data.whyChooseUs} id="why-choose-us" data-scroll-section />
          </ClientScrollWrapper>
          <AemTestimonials props={data.AemTestimonials} />
          <AemServices props={data.aemServices} />
          <AemTheProcess props={data.TheProcess} />
          <RelatedCase
            className="case-study-style gray-bg"
            props={data_related_cases}
            RelatedInsight={data.RelatedInsight}
          />
          <AdobeSection props={data.AdobeSection} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default AEMPage;
