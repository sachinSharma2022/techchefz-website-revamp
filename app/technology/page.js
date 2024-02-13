import LetsWork from "@/components/home/letsWork";
import OurNumbers from "@/components/home/ourNumbers";
import Consistent from "@/components/technology/consistent";
import Discover from "@/components/technology/discover";
import Partners from "@/components/technology/partners";
import TechnologyBanner from "@/components/technology/technologyBanner";
import TechnologyCase from "@/components/technology/technologyCase";
import Streamline from "@/components/technology/technologyStreamline";
import TechnologyValues from "@/components/technology/technologyValues";
import { api_Technology_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
const Technology = async () => {
  const data = await getData(api_Technology_Page);
  return (
    <>
      {data ? (
        <div>
          <TechnologyBanner props={data.BannerComponent} />
          <Streamline props={data.Extensive} />
          <Partners props={data.PARTNERS} />
          <Consistent props={data.Consistent} />
          <TechnologyValues props={data.Technology} />
          <OurNumbers carrer={data.carrer} experience={data.ourExperience} />
          <Discover props={data.DiscoverTech} />
          <TechnologyCase props={data.TechnologyCase} />
          <LetsWork contact={data.LetsWork} />
        </div>
      ) : (
        <>{/* {"API fail fallback"} */}</>
      )}
    </>
  );
};

export default Technology;
