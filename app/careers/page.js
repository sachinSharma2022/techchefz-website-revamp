import CareerBanner from "@/components/careers/careerBanner";
import OpenPosition from "@/components/careers/openPosition";
import TczLife from "@/components/careers/tczLife";
import Innovation from "@/components/portfolio/innovation";
import { getData,getDataDynamic } from "@/lib/fetchData";
import { api_Career_Page,api_Career_detail_Page } from "@/lib/constants";
import HomeTestimonials from "@/components/home/homeTestimonials";
import TechnologyValues from "@/components/technology/technologyValues";

const Career = async () => {
  const data = await getData(api_Career_Page);
  const data_career_details = await getDataDynamic(api_Career_detail_Page);
  return (
    <>
      {data ? (
        <div>
          <CareerBanner props={data.CareerBanner} gallary={data.gallary} />
          <TczLife props={data.Lifeattechchefz} />
          <OpenPosition props={data_career_details}/>
          <HomeTestimonials testimonials={data.Testimonials} />
          <TechnologyValues
            wrapperStyle="technology-career-style"
            props={data.Technology}
          />
          <Innovation props={data.ourInnvotion}  />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Career;
