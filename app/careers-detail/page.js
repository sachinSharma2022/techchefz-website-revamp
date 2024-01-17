import React from "react";
import CareerPositionOverview from "@/components/careersDetail/positionOverview";
import PositionDescription from "@/components/careersDetail/positionDetail";
import ContactSection from "@/components/careersDetail/contactSection";
import MoreJobs from "@/components/careersDetail/moreJobs";

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
