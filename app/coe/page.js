import OurValues from "@/components/about/ourValues";
import CoeBanner from "@/components/coe/coeBanner";
import CoeImpact from "@/components/coe/coeImpact";
import CoeService from "@/components/coe/coeService";
import CoeSupport from "@/components/coe/coeSupport";
import LetsWork from "@/components/home/letsWork";
import axios from "axios";
import { api_Coe_Page } from "@/lib/constants";

const Coe = async() => {
  const data = await getData()
  return (
    <>
    {data?<div>
      <CoeBanner />
      <OurValues />
      <CoeSupport />
      <CoeImpact />
      <CoeService />
      <LetsWork  contact={data.ContactUs}/>
    </div>:<></>}
    </>
    
  );
};

export default Coe;

async function getData() {
  try{
    const response = await axios.get(api_Coe_Page);
    return response.data?.data[0]?.attributes
  }catch(error){
    console.log(error)
    return null
  }
  
}
