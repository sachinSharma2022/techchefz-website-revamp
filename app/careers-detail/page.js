import React from "react";
import CareerPositionOverview from "@/components/careersDetail/positionOverview";
import PositionDescription from "@/components/careersDetail/positionDetail";
import ContactSection from "@/components/careersDetail/contactSection";
import MoreJobs from "@/components/careersDetail/moreJobs";
import { api_Career_detail_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";

const CareerDetail = async () => {
  const data = await getData(api_Career_detail_Page)

  return (
    <>
      <CareerPositionOverview />
      <PositionDescription  />
      <ContactSection props={data.Developercontact} />
      <MoreJobs props={data.MoreDetail}/>
    </>
  );
};

export default CareerDetail;
