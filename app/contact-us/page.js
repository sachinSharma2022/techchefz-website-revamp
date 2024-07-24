import ContactHeroBanner from "@/components/contactUs/contactHeroBanner";
import DistinctLocations from "@/components/contactUs/distinctLocations";
import GlobalPresence from "@/components/contactUs/globalPresence";
import LetsTalk from "@/components/contactUs/letsTalk";
import { api_contact_us_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
import NotFound from "../not-found";

export async function generateMetadata() {
  const data = await getData(api_contact_us_Page); 
  
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

const ContactUs = async () => {
  const data = await getData(api_contact_us_Page);

  return (
    <>
      {data ? (
        <div>
          <ContactHeroBanner props={data.Banner} />
          <LetsTalk props={data.Connect} />
          <GlobalPresence props={data.Presence} />
          <DistinctLocations props={data.DistinctLocations} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default ContactUs;
