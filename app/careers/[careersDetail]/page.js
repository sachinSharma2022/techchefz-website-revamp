import React from "react";
import CareerPositionOverview from "@/components/careersDetail/positionOverview";
import PositionDescription from "@/components/careersDetail/positionDetail";
import ContactSection from "@/components/careersDetail/contactSection";
import MoreJobs from "@/components/careersDetail/moreJobs";
import { api_Career_detail_Page } from "@/lib/constants";
import NotFound from "@/app/not-found";
import { getData, getDataDynamic } from "@/lib/fetchData";

const CareerDetail = async ({ params }) => {
  const data = await getDataDynamic(api_Career_detail_Page);
  let index = 0;
  for (const i in data) {
    if (data[i].id == params.careersDetail) {
      index = i;
    }
  }
  return (
    <>
      {data ? (
        <>
          <CareerPositionOverview
            href="#contactSection"
            props={data[index].attributes.DeveloperApply}
          />
          <PositionDescription props={data[index].attributes.DeveloperDetail} />
          <ContactSection
            id="contactSection"
            props={data[index].attributes.Developercontact}
          />
          {data.length > 1 && <MoreJobs props={data} params={params} />}
        </>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default CareerDetail;
