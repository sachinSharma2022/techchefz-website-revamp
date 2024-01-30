import CareerBanner from "@/components/careers/careerBanner";
import CareerEngagement from "@/components/careers/careerEngagement";
import CareerTestimonials from "@/components/careers/careerTestimonials";
import OpenPosition from "@/components/careers/openPosition";
import TczLife from "@/components/careers/tczLife";
import Innovation from "@/components/portfolio/innovation";
import axios from "axios";
import { api_Career_Page } from "@/lib/constants";

const Career = async() => {
  const data = await getData()
  return (
    <div>
      <CareerBanner />
      <TczLife />
      <OpenPosition />
      <CareerTestimonials testimonials={data.Testimonials} />
      <CareerEngagement />
      <Innovation />
    </div>
  );
};

export default Career;
async function getData() {
  try{
    const response = await axios.get(api_Career_Page);
    return response.data?.data[0]?.attributes
  }catch(error){
    console.log(error)
    return null
  }
  
}
