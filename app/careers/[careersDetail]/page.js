import React from "react";
import CareerPositionOverview from "@/components/careersDetail/positionOverview";
import PositionDescription from "@/components/careersDetail/positionDetail";
import ContactSection from "@/components/careersDetail/contactSection";
import MoreJobs from "@/components/careersDetail/moreJobs";
import { api_Career_detail_Page } from "@/lib/constants";
import NotFound from "@/app/not-found";
import { getDataDynamic } from "@/lib/fetchData";

const CareerDetail = async ({ params }) => {
  const data = await getDataDynamic(api_Career_detail_Page);
   const [page] = data.filter((value) => value.id == params.careersDetail);
  return (
    <>
      {data ? (
        <>
          <CareerPositionOverview
            href="#contactSection"
            props={page.attributes.DeveloperApply}
          />
          <PositionDescription props={page.attributes.DeveloperDetail} />
          <ContactSection
            id="contactSection"
            props={page.attributes.Developercontact}
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
