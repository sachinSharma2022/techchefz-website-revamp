import LandingBanner from "@/components/home/landingBanner";
import LandingPlayer from "@/components/home/landingPlayer";
import WeAreFuture from "@/components/home/weAreFuture";
import Service from "@/components/home/service";
import Projects from "@/components/home/projects";
import OurNumbers from "@/components/home/ourNumbers";
import DigitalTransformation from "@/components/home/digitalTransformation";
import LetsWork from "@/components/home/letsWork";
import Testimonials from "@/components/home/testimonials";
import TechnologyStack from "@/components/home/technologyStack";

const HomePage = () => {
  return (
    <>
      <LandingBanner />
      <LandingPlayer />
      <WeAreFuture />
      <Service />
      <Projects />
      <OurNumbers />
      <TechnologyStack />
      <DigitalTransformation />
      <Testimonials />
      <LetsWork />
    </>
  );
};

export default HomePage;