import AcceleratorBanner from "@/components/accelerators/acceleratorBanner";
import BrowserAccelerator from "@/components/accelerators/browserAccelerator";
import LetsWork from "@/components/home/letsWork";
import Faq from "@/components/common/faq";
import NotFound from "../not-found";
import { getData, getDataDynamic } from "@/lib/fetchData";
import {
  api_accelerators_Page,
  api_accelerators_details_Page,
} from "@/lib/constants";



export async function generateMetadata() {
  const data = await getData(api_accelerators_Page); 
  
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

const Accelerators = async () => {
  const data = await getData(api_accelerators_Page);
  const data_browser_accelerator = await getDataDynamic(
    api_accelerators_details_Page
  );

  return (
    <>
      {data ? (
        <div>
          <AcceleratorBanner props={data.AcceleratorBanner} />
          <BrowserAccelerator props={data_browser_accelerator} />
          <Faq props={data.Faq} />
          <LetsWork contact={data.LetsWork} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Accelerators;
