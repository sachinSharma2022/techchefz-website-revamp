import RelatedCase from "@/components/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import Faq from "@/components/common/faq";
import WhyCms from "@/components/technology/cms/whyCms";
import TechnologyValues from "@/components/technology/technologyValues";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import { getData } from "@/lib/fetchData";
import { api_cms_technologies_Page } from "@/lib/constants";

const Cms = async () => {
  const data = await getData(api_cms_technologies_Page);
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
          <RelatedCase sliderClassName="mb-0" props={data.CaseStudy} />

          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cms;
