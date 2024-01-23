import CareerBanner from "@/components/careers/careerBanner";
import CareerEngagement from "@/components/careers/careerEngagement";
import CareerTestimonials from "@/components/careers/careerTestimonials";
import OpenPosition from "@/components/careers/openPosition";
import TczLife from "@/components/careers/tczLife";
import Innovation from "@/components/portfolio/innovation";

const Career = () => {
  return (
    <div>
      <CareerBanner />
      <TczLife />
      <OpenPosition />
      <CareerTestimonials />
      <CareerEngagement />
      <Innovation />
    </div>
  );
};

export default Career;
