import LetsWork from '@/components/home/letsWork'
import OurNumbers from '@/components/home/ourNumbers'
import Consistent from '@/components/technology/consistent'
import Discover from '@/components/technology/discover'
import Partners from '@/components/technology/partners'
import Streamline from '@/components/technology/steamline'
import TechnologyBanner from '@/components/technology/technologyBanner'
import TechnologyCase from '@/components/technology/technologyCase'
import TechnologyValues from '@/components/technology/technologyValues'
import React from 'react'
import axios from "axios";
import { api_Technology_Page } from "@/lib/constants";

const Technology = async() => {
  const data = await getData()
  return (
    <>
     {data?<div>
          <TechnologyBanner/>
           <Streamline />
           <Partners/>
           <Consistent/>
          <TechnologyValues/>
          <OurNumbers  carrer={data.Career} experience={data.OurExperience}/>
          <Discover/>
          <TechnologyCase />
           <LetsWork  contact={data.ContactUs}/>
           </div>:<>{/* {"API fail fallback"} */}</>}
    </>
   
    
  );
};

export default Technology;
async function getData() {
  try{
    const response = await axios.get(api_Technology_Page);
    return response.data?.data[0]?.attributes
  }catch(error){
    console.log(error)
    return null
  }
  
}
