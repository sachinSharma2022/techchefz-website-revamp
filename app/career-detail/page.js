import React from "react";
import CareerPositionOverview from "@/components/careerDetail/positionOverview";
import PositionDescription from "@/components/careerDetail/positionDetail";
import ContactSection from "@/components/careerDetail/contactSection";
import MoreJobs from "@/components/careerDetail/moreJobs";

const CareerDetail = () => {
  return (
    <>
      <CareerPositionOverview />
      <PositionDescription />
      <ContactSection />
      <MoreJobs />
    </>
  );
};

export default CareerDetail;
