import LetsWork from '@/components/home/letsWork'
import OurNumbers from '@/components/home/ourNumbers'
import Consistent from '@/components/technology/consistent'
import Discover from '@/components/technology/discover'
import Partners from '@/components/technology/partners'
import Streamline from '@/components/technology/technologyStreamline'
import TechnologyBanner from '@/components/technology/technologyBanner'
import TechnologyCase from '@/components/technology/technologyCase'
import TechnologyValues from '@/components/technology/technologyValues'
import React from 'react'
import { getData } from "@/lib/fetchData";
import { api_Technology_Page } from "@/lib/constants";

const Technology = async() => {
  const data = await getData(api_Technology_Page)
  return (
    <>
     {data?<div>
          <TechnologyBanner props={data.BannerComponent}/>
           <Streamline />
           <Partners/>
           <Consistent/>
          <TechnologyValues/>
          {/* <OurNumbers  carrer={data.Career} experience={data.OurExperience}/> */}
          <Discover/>
          <TechnologyCase />
           <LetsWork  contact={data.ContactUs}/>
           </div>:<>{/* {"API fail fallback"} */}</>}
    </>
   
    
  );
};

export default Technology;
