import RelatedCase from "@/components/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import Faq from "@/components/common/faq";
import WhyCms from "@/components/technology/cms/whyCms";
import NotFound from "@/app/not-found";
import TechnologyValues from "@/components/technology/technologyValues";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import { getData, getDataDynamic } from "@/lib/fetchData";
import {
  api_cms_technologies_Page,
  api_Case_study_Page,
} from "@/lib/constants";

export const metadata = {
  title: "Content Management Services and Solutions | TechChefz Digital",
  description: "Explore TechChefz Digital's comprehensive content management services and solutions designed to streamline your content workflow and enhance user engagement.",
};

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
          />
          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <><NotFound /></>
      )}
    </>
  );
};

export default Cms;
