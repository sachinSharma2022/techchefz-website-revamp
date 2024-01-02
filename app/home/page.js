"use client";
import React,{useState,useEffect,useRef} from "react";
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
import VideoCustom from "@/components/ui/videoCustom";


const HomePage = () => {
  const [videoScale, setVideoScale] = useState(0.8); // Initial smaller size, adjust as needed
  const containerRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.clientHeight;
      const triggerPoint = containerTop - window.innerHeight;
      const maxScale = 1; // Maximum scale, adjust as needed

      // Calculate the scale factor based on the scroll position
      const newScale = Math.min(
        maxScale,
        Math.max(0.8, 0.8 + (maxScale - 0.8) * (scrollPosition - triggerPoint) / containerHeight)
      );

      // Ensure the scale is within the desired range
      setVideoScale(newScale);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <LandingBanner />
      <VideoCustom src="https://media.wearemotto.com/app/uploads/2022/11/14104326/home-hero-mobile.mp4" />
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
