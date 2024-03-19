import ImageCaptionCard from "@/components/portfolio/imageCaptionCard";
import Innovation from "@/components/portfolio/innovation";
import LandingBanner from "@/components/portfolio/landingBanner";
import { api_portfolios_Page, api_Case_study_Page } from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";
import styles from "./style.module.scss";
import NotFound from "../not-found";



export async function generateMetadata() {
  const data = await getData(api_portfolios_Page); 
  
  return {
    title: data?.SeoData?.Title,
    description: data?.SeoData?.Description,
   
  };
}

const Portfolio = async () => {
  const data = await getData(api_portfolios_Page);
  const data_case_study = await getDataDynamic(api_Case_study_Page);
  console.log(data_case_study);
  return (
    <>
      {data && data_case_study ? (
        <div className={styles.portfolioPageStyle}>
          <LandingBanner props={data.Banner} />
          <ImageCaptionCard case_study={data_case_study} />
          <Innovation props={data.ourInnvotion} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Portfolio;
