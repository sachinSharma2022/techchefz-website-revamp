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
    title: data?.SeoData?.Title,
    description: data?.SeoData?.Description,
   
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
