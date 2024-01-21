import React from "react";
import SearchInput from "@/components/ui/searchInput";
import CustomDropdown from "@/components/ui/customDropdown";
import BrowserAcceleratorCard from "../browserAcceleratorCard";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const BrowserAccelerator = () => {
  const browserCardData = [
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Retail and Consumer Goods",
      heading: "Improve On-Shelf Availability",
      text: "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.Intelligence width={36} height={36} />,
      subHeading: "Manufacturing",
      heading: "Better LLMs With Better Data Using Cleanlab Studio",
      text: "Enhance your machine learning models by leveraging Cleanlab Studio for improved data quality, leading to more accurate & reliable insights.",
    },
    {
      cardIcon: <Icons.Service width={36} height={36} />,
      subHeading: "Financial Services",
      heading: "Fine-Grained Demand Forecasting",
      text: "Refine your demand forecasting strategies, gaining precision in predicting market needs at a granular level for effective inventory planning and management.",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Healthcare and Life Sciences",
      heading: "Cohort Building with Knowledge Graphs",
      text: "Utilize knowledge graphs to build insightful cohorts, enabling a deeper understanding of user behavior and preferences for targeted and personalized strategies.",
    },
    {
      cardIcon: <Icons.DataIntelligence width={36} height={36} />,
      subHeading: "Media & Entertainment",
      heading: "Biomedical Literature Q&A with LLMs",
      text: "Access advanced question-answering capabilities of large language models to extract valuable insights from biomedical literature, accelerating research and knowledge discovery.",
    },
    {
      cardIcon: <Icons.Cloud width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      text: "Transform real-world data into abstracted insights, particularly focusing on oncology, to facilitate data-driven decision-making and advancements in the field.",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      text: "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      text: "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      text: "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Retail and Consumer Goods",
      heading: "Improve On-Shelf Availability",
      text: "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.Intelligence width={36} height={36} />,
      subHeading: "Manufacturing",
      heading: "Better LLMs With Better Data Using Cleanlab Studio",
      text: "Enhance your machine learning models by leveraging Cleanlab Studio for improved data quality, leading to more accurate & reliable insights.",
    },
    {
      cardIcon: <Icons.PerformanceIcon width={36} height={36} />,
      subHeading: "Financial Services",
      heading: "Fine-Grained Demand Forecasting",
      text: "Refine your demand forecasting strategies, gaining precision in predicting market needs at a granular level for effective inventory planning and management.",
    },
  ];
  return (
    <section className={styles.browserAccelerator}>
      <div className={cn("primary-container")}>
        <div className={styles.topSection}>
          <SearchInput />
          <CustomDropdown
            title="Industry"
            options={[
              "Automobile",
              "It Development",
              "Network Security",
              "Cloud Service",
            ]}
          />
          <CustomDropdown
            title="Technology"
            options={[
              "AEM",
              "It Development",
              "Network Security",
              "Cloud Service",
            ]}
          />
          <CustomDropdown
            title="Sort By"
            options={[
              "Newest First",
              "It Development",
              "Network Security",
              "Cloud Service",
            ]}
          />
        </div>
        <hr className={styles.breakLine} />
        <h5 className={styles.browserAcceleratorHeading}>
          Browser Accelerator
        </h5>
        <div className={styles.browserAcceleratorCards}>
          {browserCardData.map((data, index) => (
            <BrowserAcceleratorCard
              key={index}
              cardIcon={data.cardIcon}
              subHeading={data.subHeading}
              heading={data.heading}
              text={data.text}
              href="/accelerators-details"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowserAccelerator;
