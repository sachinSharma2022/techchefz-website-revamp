import CareerBanner from "@/components/careers/careerBanner";
import EmployeeEngagement from "@/components/careers/employeeEngagement";
import OpenPosition from "@/components/careers/openPosition";
import TczLife from "@/components/careers/tczLife";
import Testimonials from "@/components/home/testimonials";
import Innovation from "@/components/portfolio/innovation";

const Career = () => {
  return (
    <div>
      <CareerBanner />
      <TczLife />
      <OpenPosition />
      <Testimonials />
      <EmployeeEngagement />
      <Innovation />
    </div>
  );
};

export default Career;
