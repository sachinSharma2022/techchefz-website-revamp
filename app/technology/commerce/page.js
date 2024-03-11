import RelatedCase from "@/components/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import Faq from "@/components/common/faq";
import WhyCms from "@/components/technology/cms/whyCms";
import TechnologyValues from "@/components/technology/technologyValues";
import NotFound from "@/app/not-found";
import { getData, getDataDynamic } from "@/lib/fetchData";
import { api_techcommerces_Page, api_Case_study_Page } from "@/lib/constants";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";

export const metadata = {
  title: "Commerce Services and Solutions | TechChefz Digital",
  description: "Explore TechChefz Digital's commerce services and solutions, designed to help businesses create seamless and personalized shopping experiences for their customers.",
};

const Cms = async () => {
  const data = await getData(api_techcommerces_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  return (
    <>
      {data ? (
        <div>
          <CmsBanner props={data.Banner} />
          <CmsPlayer props={data.Player} />
          <WhyCms props={data.Why} />
          <CmsType props={data.Type} />
          <CmsDifference props={data.Difference} />
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
