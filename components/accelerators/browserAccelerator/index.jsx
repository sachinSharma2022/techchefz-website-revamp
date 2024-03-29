"use client";
import CustomDropdown from "@/components/ui/customDropdown";
import SearchInput from "@/components/ui/searchInput";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import BadgeInfoCard from "@/components/common/badgeInfoCard";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const BrowserAccelerator = () => {
  const { theme, setTheme } = useContext(MyContext);
  const browserCardData = [
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Retail and Consumer Goods",
      heading: "Improve On-Shelf Availability",
      description:
        "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.Intelligence width={36} height={36} />,
      subHeading: "Manufacturing",
      heading: "Better LLMs With Better Data Using Cleanlab Studio",
      description:
        "Enhance your machine learning models by leveraging Cleanlab Studio for improved data quality, leading to more accurate & reliable insights.",
    },
    {
      cardIcon: <Icons.Intelligence width={36} height={36} />,
      subHeading: "Financial Services",
      heading: "Fine-Grained Demand Forecasting",
      description:
        "Refine your demand forecasting strategies, gaining precision in predicting market needs at a granular level for effective inventory planning and management.",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Healthcare and Life Sciences",
      heading: "Cohort Building with Knowledge Graphs",
      description:
        "Utilize knowledge graphs to build insightful cohorts, enabling a deeper understanding of user behavior and preferences for targeted and personalized strategies.",
    },
    {
      cardIcon: <Icons.DataIntelligence width={36} height={36} />,
      subHeading: "Media & Entertainment",
      heading: "Biomedical Literature Q&A with LLMs",
      description:
        "Access advanced question-answering capabilities of large language models to extract valuable insights from biomedical literature, accelerating research and knowledge discovery.",
    },
    {
      cardIcon: <Icons.Cloud width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      description:
        "Transform real-world data into abstracted insights, particularly focusing on oncology, to facilitate data-driven decision-making and advancements in the field.",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      description:
        "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      description:
        "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Technology and Software",
      heading: "Abstracting Real-World Data for Oncology",
      description:
        "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.CustomDevelopment width={36} height={36} />,
      subHeading: "Retail and Consumer Goods",
      heading: "Improve On-Shelf Availability",
      description:
        "Elevate your product accessibility with strategic inventory management & optimization, ensuring consistently meetin...",
    },
    {
      cardIcon: <Icons.Intelligence width={36} height={36} />,
      subHeading: "Manufacturing",
      heading: "Better LLMs With Better Data Using Cleanlab Studio",
      description:
        "Enhance your machine learning models by leveraging Cleanlab Studio for improved data quality, leading to more accurate & reliable insights.",
    },
    {
      cardIcon: <Icons.PerformanceIcon width={36} height={36} />,
      subHeading: "Financial Services",
      heading: "Fine-Grained Demand Forecasting",
      description:
        "Refine your demand forecasting strategies, gaining precision in predicting market needs at a granular level for effective inventory planning and management.",
    },
  ];

  const dataServices = [
    { value: "Data", label: "Data" },
    { value: "It Development", label: "It Development" },
    { value: "Network Security", label: "Network Security" },
    { value: "Cloud Service", label: "Cloud Service" },
  ];
  const dataIndustry = [
    { value: "Hardware", label: "Hardware" },
    { value: "Software", label: "Software" },
    { value: "Systems Integrator", label: "Systems Integrator" },
  ];
  const dataTechnology = [
    { value: "Newest First", label: "Web Content" },
    { value: "It Development", label: "Frontend" },
  ];

  return (
    <section
      className={`${styles.browserAccelerator} ${
        theme ? styles.browserAcceleratorDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.topSection}>
          <SearchInput />

          <div className={styles.inputSection}>
            <CustomDropdown
              title="Industry"
              options={dataIndustry}
              className={styles.grayInput}
            />

            <CustomDropdown
              title="Technology"
              options={dataTechnology}
              className={styles.grayInput}
            />

            <CustomDropdown
              title="Sort By"
              options={dataServices}
              className={styles.grayInput}
            />
          </div>
        </div>
        <hr className={styles.breakLine} />
        <h5 className={styles.browserAcceleratorHeading}>
          Browser Accelerator
        </h5>
        <div className={styles.browserAcceleratorCards}>
          {browserCardData.map((item, index) => (
            <BadgeInfoCard
              key={index}
              icons={item.cardIcon}
              subHeading={item.subHeading}
              heading={item.heading}
              description={item.description}
              href="/accelerators/accelerators-details"
              options={["Automobile", "Trending", "New"]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowserAccelerator;
