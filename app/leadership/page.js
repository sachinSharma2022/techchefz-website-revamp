import FounderDesk from "@/components/about/founderDesk";
import OurTeam from "@/components/about/ourTeam";
import LetsWork from "@/components/home/letsWork";
import OurNumbers from "@/components/home/ourNumbers";
import HeroBanner from "@/components/leadership/heroBanner";
import PhilosophyVision from "@/components/leadership/philosophy-vision";
import TeamBehind from "@/components/leadership/teamBehind";
import { api_About_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
import NotFound from "../not-found";
import RelatedCase from "@/components/relatedCase";
import CaseStudy from "@/components/leadership/caseStudy";

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
    metaSocialDescription:
      data?.SeoData?.metaSocial?.socialNetwork?.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaSocial?.socialNetwork?.image?.data?.attributes?.url}`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  };
}

const LeadershipPage = async () => {
  const data = await getData(api_About_Page);

  return (
    <>
      {data ? (
        <div className="overflow-hidden">
          <HeroBanner />
          <TeamBehind />
          <FounderDesk props={data.FounderDesk} />
          <OurTeam props={data.Team} />
          <PhilosophyVision />
          <CaseStudy />
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

export default LeadershipPage;
