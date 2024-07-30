import NotFound from "@/app/not-found";
import Faq from "@/components/common/faq";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import WhyCms from "@/components/technology/cms/whyCms";
import {
  api_Case_study_Page,
  api_cms_technologies_Page,
} from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";

export async function generateMetadata() {
  const data = await getData(api_cms_technologies_Page);

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

const Cms = async () => {
  const data = await getData(api_cms_technologies_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  return (
    <>
      {data ? (
        <div>
          <CmsBanner props={data.CmsBanner} />
          <CmsPlayer props={data.CmsPlayer} />
          <WhyCms props={data.WhyCms} />
          <CmsType props={data.CmsType} />
          <CmsDifference props={data.CmsDifference} />
          {/* <TechnologyValues
            wrapperStyle="technology-cms-styles"
            props={data.Technology}
          /> */}
          <SolutionTheProcess props={data.OurProcess} />
          <Faq props={data.Faq} />
          <RelatedCase
            className="cms-related-style"
            props={data_related_cases}
            RelatedInsight={data.RelatedInsight}
          />
          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Cms;
