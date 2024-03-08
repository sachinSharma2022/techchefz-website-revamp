import CareerBanner from "@/components/careers/careerBanner";
import OpenPosition from "@/components/careers/openPosition";
import TczLife from "@/components/careers/tczLife";
import Innovation from "@/components/portfolio/innovation";
import { getData, getDataDynamic } from "@/lib/fetchData";
import { api_Career_Page, api_Career_detail_Page } from "@/lib/constants";
import HomeTestimonials from "@/components/home/homeTestimonials";
import TechnologyValues from "@/components/technology/technologyValues";
import NotFound from "../not-found";
import ContactSection from "@/components/careersDetail/contactSection";

export const metadata = {
  title: "Job Openings and Career Opportunities at TechChefz Digital",
  description: "Job Openings and Career Opportunities at TechChefz Digital",
};

const Career = async () => {
  const data = await getData(api_Career_Page);
  const data_career_details = await getDataDynamic(api_Career_detail_Page);
  return (
    <>
      {data ? (
        <div className="career-page">
          <CareerBanner
            href="#OpenPosition"
            props={data.CareerBanner}
            gallary={data.gallary}
          />
          <TczLife props={data.Lifeattechchefz} />
          {data_career_details.length ? (
            <OpenPosition id="OpenPosition" props={data_career_details} />
          ) : (
            <ContactSection
              id="contactSection"
              props={data_career_details[0].attributes.Developercontact}
            />
          )}

          <HomeTestimonials testimonials={data.Testimonials} />
          <TechnologyValues
            wrapperStyle="technology-career-style"
            props={data.Technology}
          />
          <Innovation props={data.ourInnvotion} />
        </div>
      ) : (
        <><NotFound /></>
      )}
    </>
  );
};

export default Career;
