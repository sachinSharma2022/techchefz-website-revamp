//import DigitalTransformation from "@/components/home/digitalTransformation";
//import HomeTestimonials from "@/components/home/homeTestimonials";
import LandingBanner from "@/components/home/landingBanner";
//import LetsWork from "@/components/home/letsWork";
//import OurNumbers from "@/components/home/ourNumbers";
import Projects from "@/components/home/projects";
import Service from "@/components/home/service";
//import TechnologyStack from "@/components/home/technologyStack";
import WeAreFuture from "@/components/home/weAreFuture";
import HomepageIntro from "@/components/ui/homepageIntro";
import Curve from "@/components/ui/pageTransition";
import { api_Home_Page, base_Url, api_Case_study_Page } from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";
import NotFound from "../not-found";
import dynamic from "next/dynamic";
import Cookies from "@/components/ui/cookiesPopup";
const LetsWork = dynamic(() => import("@/components/home/letsWork"));
const HomeTestimonials = dynamic(() =>
  import("@/components/home/homeTestimonials")
);
const OurNumbers = dynamic(() => import("@/components/home/ourNumbers"));
const DigitalTransformation = dynamic(() =>
  import("@/components/home/digitalTransformation")
);
const TechnologyStack = dynamic(() =>
  import("@/components/home/technologyStack")
);

const HomePage = async () => {
  const data = await getData(api_Home_Page);
  const data_Portfolio = await getDataDynamic(api_Case_study_Page);
  return (
    <Curve>
      <>
        {data ? (
          <div>
            <LandingBanner props={data.Banner} />
            <HomepageIntro
              src={
                data?.Technology?.Video?.data?.attributes?.url
                  ? `${base_Url}${data?.Technology?.Video?.data?.attributes?.url}`
                  : `${base_Url}/`
              }
            />
            <WeAreFuture props={data.Technology} />
            <Service props={data.Services} />
            <Projects project={data.Project} brands={data_Portfolio} />
            <OurNumbers carrer={data.carrer} experience={data.ourExperience} />
            <TechnologyStack technology={data.Technologys} />
            <DigitalTransformation digital={data.digitalTransform} />
            <HomeTestimonials testimonials={data.Testimonials} />
            <LetsWork contact={data.ContactUs} />
            <Cookies props={data.cookie} />
          </div>
        ) : (
          <>
            <NotFound />
          </>
        )}
      </>
    </Curve>
  );
};

export default HomePage;
