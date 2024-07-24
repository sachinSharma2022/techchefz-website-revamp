import OurValues from "@/components/about/ourValues";
import CoeBanner from "@/components/coe/coeBanner";
import CoeImpact from "@/components/coe/coeImpact";
import CoeService from "@/components/coe/coeService";
import CoeSupport from "@/components/coe/coeSupport";
import LetsWork from "@/components/home/letsWork";
import NotFound from "../not-found";
import { getData } from "@/lib/fetchData";
import { api_Coe_Page } from "@/lib/constants";



export async function generateMetadata() {
  const data = await getData(api_Coe_Page); 
  
  return {
    title: data?.SeoData?.metaTitle,
    description: data?.SeoData?.metaDescription,
    keywords: data?.SeoData?.keywords,
    metaRobots: data?.SeoData?.metaRobots,
    structuredData: data?.SeoData?.structuredData,
    metaViewport: data?.SeoData?.metaViewport,
    canonicalURL: data?.SeoData?.canonicalURL,
    metaSocialTitle: data?.SeoData?.metaSocial?.socialNetwork?.title,
    metaSocialDescription: data?.SeoData?.metaSocial?.socialNetwork?.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaSocial?.socialNetwork?.image?.data?.attributes?.url}`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
   
  };
}

const Coe = async () => {
  const data = await getData(api_Coe_Page);
  return (
    <>
      {data ? (
        <div>
          <CoeBanner props={data.CoeBanner} />
          <OurValues props={data.Ourvaluesection} />
          <CoeSupport props={data.Support} />
          <CoeImpact props={data.CoeImpact} />
          <CoeService props={data.CoeService} />
          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <><NotFound /></>
      )}
    </>
  );
};

export default Coe;
