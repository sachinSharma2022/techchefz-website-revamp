import React from 'react';
import CareerPositonOverview from "@/components/careerDetail/positionOverview";
import PositionDescription from "@/components/careerDetail/postionDetail";
import ContactSection from "@/components/careerDetail/contactSection";
import MoreJobs from "@/components/careerDetail/moreJobs";

const CareerDetail = () => {
  return (
    <>
    <CareerPositonOverview />
    <PositionDescription />
    <ContactSection />
    <MoreJobs />
    </>
  )
}

export default CareerDetail