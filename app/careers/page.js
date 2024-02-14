import CareerBanner from "@/components/careers/careerBanner";
import OpenPosition from "@/components/careers/openPosition";
import TczLife from "@/components/careers/tczLife";
import Innovation from "@/components/portfolio/innovation";
import { getData } from "@/lib/fetchData";
import { api_Career_Page } from "@/lib/constants";
import HomeTestimonials from "@/components/home/homeTestimonials";
import TechnologyValues from "@/components/technology/technologyValues";

const Career = async () => {
  const data = await getData(api_Career_Page);
  return (
    <>
      {data ? (
        <div>
          <CareerBanner props={data.CareerBanner} />
          <TczLife props={data.Lifeattechchefz} />
          <OpenPosition props={data.jobpost}/>
          <HomeTestimonials testimonials={data.Testimonials} />
          <TechnologyValues
            wrapperStyle="technology-career-style"
            props={data.Technology}
          />
          <Innovation props={data.ourInnvotion} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Career;
