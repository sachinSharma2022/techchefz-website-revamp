import AboutBanner from "@/components/about/aboutBanner";
import FounderDesk from "@/components/about/founderDesk";
import OurClients from "@/components/about/ourClients";
import OurHistory from "@/components/about/ourHistory";
import OurResults from "@/components/about/ourResults";
import OurTeam from "@/components/about/ourTeam";
import OurValues from "@/components/about/ourValues";
import OurVision from "@/components/about/ourVision";
import WhatWeDo from "@/components/about/whatWeDo";
import LetsWork from "@/components/home/letsWork";
import NotFound from "../not-found";
import { api_About_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
import OurGallery from "@/components/about/ourGallery";

export async function generateMetadata() {
  const data = await getData(api_About_Page);

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

const AboutPage = async () => {
  const data = await getData(api_About_Page);

  return (
    <>
      {data ? (
        <div className="overflow-hidden">
          <AboutBanner props={data.BannerComponent} />
          <OurVision props={data.OurVisionMissionComponent} />
          <OurHistory
            props={data.OurHistoryComponent}
            OurHistory={data.OurHistory}
          />
          <WhatWeDo props={data.WhatWeDoComponent} />
          <OurValues props={data.Ourvaluesection} />
          <OurResults props={data.Result} />
          <FounderDesk props={data.FounderDesk} />
          <OurTeam props={data.Team} />
          <OurGallery props={data.Team} />
          <OurClients props={data.OurClient} />
          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default AboutPage;
