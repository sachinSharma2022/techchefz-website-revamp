import DigitalTransformation from "@/components/home/digitalTransformation";
import HomeTestimonials from "@/components/home/homeTestimonials";
import LandingBanner from "@/components/home/landingBanner";
import LetsWork from "@/components/home/letsWork";
import OurNumbers from "@/components/home/ourNumbers";
import Projects from "@/components/home/projects";
import Service from "@/components/home/service";
import TechnologyStack from "@/components/home/technologyStack";
import WeAreFuture from "@/components/home/weAreFuture";
import Curve from "@/components/ui/pageTransition";
import VideoCustom from "@/components/ui/videoCustom";
import Curve from "@/components/ui/pageTransition";
import { api_Home_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";

const HomePage = async () => {
  const data = await getData(api_Home_Page);
  return (
    <>
      <Curve>
        {data ? (
          <div>
            <LandingBanner props={data.Banner} />
            <VideoCustom src="global.mp4" />
            <WeAreFuture props={data.Technology} />
            <Service props={data.Services} />
            <Projects project={data.Project} brands={data.Brands} />
            <OurNumbers carrer={data.carrer} experience={data.ourExperience} />
            <TechnologyStack technology={data.Technologys} />
            <DigitalTransformation digital={data.digitalTransform} />
            <HomeTestimonials testimonials={data.Testimonials} />
            <LetsWork contact={data.ContactUs} />
          </div>
        ) : (
          <>{/* {"API fail fallback"} */}</>
        )}
      </Curve>
    </>
  );
};

export default HomePage;

