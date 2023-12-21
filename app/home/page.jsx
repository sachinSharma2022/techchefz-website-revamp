import LandingBanner from "@/components/home/landingBanner";
import LandingPlayer from "@/components/home/landingPlayer";
import WeAreFuture from "@/components/home/weAreFuture";
import Service from "@/components/home/service";
import Projects from "@/components/home/projects";

const HomePage = () => {
  return (
    <>
      <LandingBanner />
      <LandingPlayer />
      <WeAreFuture />
      <Service />
      <Projects />
    </>
  );
};

export default HomePage;
