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
import Lenis from '@studio-freight/lenis'
import {useEffect} from 'react'

const HomePage = () => {

  useEffect( () => {

    


    const lenis = new Lenis({
      duration: .7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
  });
  
  function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  }, [])
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

