import CareerBanner from "@/components/careers/careerBanner";
import CareerEngagement from "@/components/careers/careerEngagement";
import CareerTestimonials from "@/components/careers/careerTestimonials";
import OpenPosition from "@/components/careers/openPosition";
import TczLife from "@/components/careers/tczLife";
import Innovation from "@/components/portfolio/innovation";
import { getData } from "@/lib/fetchData";
import { api_Career_Page } from "@/lib/constants";

const Career = async() => {
  const data = await getData(api_Career_Page)
  return (
    <>{data? <div>
      <CareerBanner />
      <TczLife />
      <OpenPosition />
      <CareerTestimonials testimonials={data.Testimonials} />
      <CareerEngagement />
      <Innovation />
    </div>:<></>}
    </>
   
  );
};

export default Career;
