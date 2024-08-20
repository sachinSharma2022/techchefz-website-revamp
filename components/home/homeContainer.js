"use client";
import dynamic from "next/dynamic";
import { base_Url } from "@/lib/constants";
import useLazyLoad from "@/lib/useLazyLoad";
import { useEffect, useRef, useState } from "react";
import LandingBanner from "@/components/home/landingBanner";
import HomepageIntro from "@/components/ui/homepageIntro";
import WeAreFuture from "./weAreFuture";
import Service from "./service";
//const LandingBanner = dynamic(() => import("@/components/home/landingBanner"));
// const HomepageIntro = dynamic(() => {
//     return import("@/components/ui/homepageIntro")});
//const WeAreFuture = dynamic(() => import("@/components/home/weAreFuture"));
const Projects = dynamic(() => import("@/components/home/projects"));
//const Service = dynamic(() => import("@/components/home/service"));
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
const HomeContainer = ({ data, data_Portfolio }) => {
  //   const targetRefLandingBanner = useRef(null);
  //   const targetRefHomepageIntro = useRef(null);
  //const targetRefWeAreFuture = useRef(null);
  // const targetRefService = useRef(null);
  const targetRefProjects = useRef();
  const targetRefOurNumbers = useRef();
  const targetRefTechnologyStack = useRef(null);
  const targetRefDigitalTransformation = useRef(null);
  const targetRefHomeTestimonials = useRef(null);
  const targetRefLetsWork = useRef(null);
  //   const isVisibleLandingBanner = useLazyLoad(targetRefLandingBanner);
  //   const isVisibleHomepageIntro = useLazyLoad(targetRefHomepageIntro);
  //const isVisibleWeAreFuture = useLazyLoad(targetRefWeAreFuture);
  // const isVisibleService = useLazyLoad(targetRefService);
  const isVisibleProjects = useLazyLoad(targetRefProjects);
  const isVisibleOurNumbers = useLazyLoad(targetRefOurNumbers);
  const isVisibleTechnologyStack = useLazyLoad(targetRefTechnologyStack);
  const isVisibleDigitalTransformation = useLazyLoad(
    targetRefDigitalTransformation
  );
  const isVisibleHomeTestimonials = useLazyLoad(targetRefHomeTestimonials);
  const isVisibleLetsWork = useLazyLoad(targetRefLetsWork);

  useEffect(() => {
    document.querySelector("body").classList.remove("error-page");
  },[]);
  
  return (
    <>
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
      <section className="pt-5" ref={targetRefProjects}>
        {isVisibleProjects && (
          <Projects project={data.Project} brands={data_Portfolio} />
        )}
      </section>
      <section className="pt-5" ref={targetRefOurNumbers}>
        {isVisibleOurNumbers && (
          <OurNumbers carrer={data.carrer} experience={data.ourExperience} />
        )}
      </section>
      <section className="pt-5" ref={targetRefTechnologyStack}>
        {isVisibleTechnologyStack && (
          <TechnologyStack technology={data.Technologys} />
        )}
      </section>
      <section className="pt-5" ref={targetRefDigitalTransformation}>
        {isVisibleDigitalTransformation && (
          <DigitalTransformation digital={data.digitalTransform} />
        )}
      </section>
      <section className="pt-5" ref={targetRefHomeTestimonials}>
        {isVisibleHomeTestimonials && (
          <HomeTestimonials testimonials={data.Testimonials} />
        )}
      </section>
      <section className="pt-5" ref={targetRefLetsWork}>
        {isVisibleLetsWork && <LetsWork contact={data.ContactUs} />}
      </section>
    </>
  );
};
export default HomeContainer;
