import ContactHeroBanner from "@/components/contactUs/contactHeroBanner";
import DistinctLocations from "@/components/contactUs/distinctLocations";
import GlobalPresence from "@/components/contactUs/globalPresence";
import LetsTalk from "@/components/contactUs/letsTalk";
import { api_contact_us_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";

const ContactUs = async() =>{
  const data = await getData(api_contact_us_Page)

  return (
    <div>
      <ContactHeroBanner props={data.Banner} />
      <LetsTalk props={data.Connect}/>
      <GlobalPresence props={data.Presence}/>
      <DistinctLocations props={data.DistinctLocations}/>
    </div>
  );
};

export default ContactUs;
