import ImageCaptionCard from "@/components/portfolio/imageCaptionCard";
import Innovation from "@/components/portfolio/innovation";
import LandingBanner from "@/components/portfolio/landingBanner";
import axios, { Axios } from "axios";
import { api_portfolios_Page } from "@/lib/constants";

import styles from "./style.module.scss";

const Portfolio = async () => {
  const data = await getData(api_portfolios_Page)

  return (
    <div className={styles.portfolioPageStyle}>
      <LandingBanner props={data.Banner} />
      <ImageCaptionCard />
      <Innovation props={data.ourInnvotion} />
    </div>
  );
};

export default Portfolio;

