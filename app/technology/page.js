import LetsWork from "@/components/home/letsWork";
import OurNumbers from "@/components/home/ourNumbers";
import Consistent from "@/components/technology/consistent";
import Discover from "@/components/technology/discover";
import Partners from "@/components/technology/partners";
import TechnologyBanner from "@/components/technology/technologyBanner";
import Streamline from "@/components/technology/technologyStreamline";
import TechnologyValues from "@/components/technology/technologyValues";
import { api_Technology_Page, api_Case_study_Page } from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";
import RelatedCase from "@/components/relatedCase";
import NotFound from "../not-found";

export const metadata = {
  title: "Explore Technologies | TechChefz Digital",
  description: "Discover the latest technologies and solutions offered by TechChefz Digital to transform your business and enhance your digital presence.",
};

const Technology = async () => {
  const data = await getData(api_Technology_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  return (
    <>
      {data ? (
        <div>
          <TechnologyBanner props={data.BannerComponent} />
          <Streamline props={data.Extensive} />
          <Partners props={data.PARTNERS} />
          <Consistent props={data.Consistent} />
          <TechnologyValues
            wrapperStyle="technology-styles"
            props={data.Technology}
          />
          <OurNumbers carrer={data.carrer} experience={data.ourExperience} />
          <Discover props={data.DiscoverTech} />
          <RelatedCase
            className="tech-related-style"
            props={data_related_cases}
          />
          <LetsWork contact={data.LetsWork} />
        </div>
      ) : (
        <><NotFound /></>
      )}
    </>
  );
};

export default Technology;
