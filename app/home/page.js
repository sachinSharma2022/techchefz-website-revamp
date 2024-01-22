import DigitalTransformation from "@/components/home/digitalTransformation";
import HomeTestimonials from "@/components/home/homeTestimonials";
import LandingBanner from "@/components/home/landingBanner";
import LetsWork from "@/components/home/letsWork";
import OurNumbers from "@/components/home/ourNumbers";
import Projects from "@/components/home/projects";
import Service from "@/components/home/service";
import TechnologyStack from "@/components/home/technologyStack";
import WeAreFuture from "@/components/home/weAreFuture";
import VideoCustom from "@/components/ui/videoCustom";
import Curve from "@/components/ui/pageTransition";

const HomePage = () => {
  return (
    <>
      <Curve>
        <LandingBanner />
        <VideoCustom src="global.mp4" />
        <WeAreFuture />
        <Service />
        <Projects />
        <OurNumbers />
        <TechnologyStack />
        <DigitalTransformation />
        <HomeTestimonials />
        <LetsWork />
      </Curve>
    </>
  );
};

export default HomePage;
